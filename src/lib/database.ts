import postgres from "postgres";

// Build connection string from environment variables
const buildConnectionString = () => {
  const user = process.env.PGUSER;
  const password = process.env.PGPASSWORD;
  const host = process.env.PGHOST;
  const port = process.env.PGPORT;
  const database = process.env.PGDATABASE;

  if (!user || !password || !host || !port || !database) {
    throw new Error("Missing required database environment variables");
  }

  return `postgresql://${user}:${password}@${host}:${port}/${database}`;
};

// Determine SSL configuration based on environment
const getSSLConfig = () => {
  // In production, always use SSL with proper verification
  if (process.env.NODE_ENV === "production") {
    return { rejectUnauthorized: true };
  }
  
  // In development, be more permissive to handle various database setups
  if (process.env.DB_SSL_DISABLED === "true") {
    return false;
  }
  
  // For development, try SSL first but allow self-signed certs
  return process.env.DB_SSL_REJECT_UNAUTHORIZED === "false" ? 
    { rejectUnauthorized: false } : 
    false; // Default to no SSL in development
};

// Create postgres connection with secure configuration
const sql = postgres(buildConnectionString(), {
  ssl: getSSLConfig(),
  connect_timeout: parseInt(process.env.DB_CONNECTION_TIMEOUT || "10000"),
  max: parseInt(process.env.DB_MAX_CONNECTIONS || "10"),
  idle_timeout: parseInt(process.env.DB_IDLE_TIMEOUT || "30000")
});

export async function query(text: string, params?: any[]) {
  try {
    // Only log detailed connection info in development
    if (process.env.NODE_ENV === "development") {
      console.log("🔄 Executing query:", text.substring(0, 100) + "...");
      console.log("🔗 Using connection:", {
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        user: process.env.PGUSER,
        database: process.env.PGDATABASE
      });
    }

    const result = await sql.unsafe(text, params || []);
    
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Query successful, rows:", result.length);
    }
    
    return { rows: result, rowCount: result.length };
  } catch (error) {
    console.error("❌ Database query error:", error);
    throw error;
  }
}

// Test connection function
export async function testConnection() {
  try {
    console.log("🧪 Testing database connection...");
    const result =
    await sql`SELECT NOW() as current_time, version() as version`;
    console.log("✅ Connection test successful:", result[0]);
    return { success: true, data: result[0] };
  } catch (error) {
    console.error("❌ Connection test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
}

export default sql;