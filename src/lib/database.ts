import postgres from "postgres";

// Build connection string from environment variables
const buildConnectionString = () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const database = process.env.DB_NAME;

  if (!user || !password || !host || !port || !database) {
    throw new Error("Missing required database environment variables");
  }

  return `postgresql://${user}:${password}@${host}:${port}/${database}`;
};

// Create postgres connection with environment variables
const sql = postgres(buildConnectionString(), {
  ssl:
  process.env.DB_SSL_REJECT_UNAUTHORIZED === "false" ?
  { rejectUnauthorized: false } :
  false,
  connect_timeout: parseInt(process.env.DB_CONNECTION_TIMEOUT || "10000"),
  max: parseInt(process.env.DB_MAX_CONNECTIONS || "10")
});

export async function query(text: string, params?: any[]) {
  try {
    console.log("🔄 Executing query:", text.substring(0, 100) + "...");
    console.log("🔗 Using connection:", {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME
    });

    const result = await sql.unsafe(text, params || []);
    console.log("✅ Query successful, rows:", result.length);
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