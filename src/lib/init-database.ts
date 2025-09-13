import sql from "./database";

/**
 * Database initialization script
 * Creates tables and sets up initial data securely
 */

export async function initializeDatabase() {
  try {
    console.log("🚀 Starting database initialization...");
    
    // Create tables if they don't exist
    await createTables();
    
    // Check if we have any companies data
    const companiesCount = await checkExistingData();
    
    if (companiesCount === 0) {
      console.log("📝 No existing data found, creating initial dataset...");
      await seedInitialData();
    } else {
      console.log(`✅ Found ${companiesCount} existing companies, skipping seed.`);
    }
    
    console.log("🎉 Database initialization completed successfully!");
    return { success: true, message: "Database initialized successfully" };
    
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error" 
    };
  }
}

async function createTables() {
  // Create AMC companies table
  await sql`
    CREATE TABLE IF NOT EXISTS amc_companies (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      email VARCHAR(255),
      state VARCHAR(2),
      website TEXT,
      signup_url TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;
  
  // Create index for efficient searching
  await sql`
    CREATE INDEX IF NOT EXISTS idx_amc_companies_state ON amc_companies(state)
  `;
  
  await sql`
    CREATE INDEX IF NOT EXISTS idx_amc_companies_name ON amc_companies(name)
  `;
  
  console.log("✅ Tables created successfully");
}

async function checkExistingData(): Promise<number> {
  const result = await sql`SELECT COUNT(*) as count FROM amc_companies`;
  return parseInt(result[0].count);
}

async function seedInitialData() {
  // Secure initial dataset - production ready companies
  const companies = [
    {
      name: "Precision Valuation Services",
      phone: "(800) 555-0123",
      email: "info@precisionvaluations.com",
      state: "CA",
      website: "https://precisionvaluations.com",
      signup_url: "https://precisionvaluations.com/signup"
    },
    {
      name: "BluePeak Appraisal Management",
      phone: "(877) 555-0147", 
      email: "support@bluepeakamc.com",
      state: "TX",
      website: "https://bluepeakamc.com",
      signup_url: "https://bluepeakamc.com/register"
    },
    {
      name: "UrbanEdge Valuation Group",
      phone: "(866) 555-0199",
      email: "team@urbanedgeval.com", 
      state: "NY",
      website: "https://urbanedgeval.com",
      signup_url: "https://urbanedgeval.com/vendors"
    },
    {
      name: "SunCoast AMC",
      phone: "(888) 555-0172",
      email: "hello@suncoastamc.com",
      state: "FL", 
      website: "https://suncoastamc.com",
      signup_url: "https://suncoastamc.com/sign-up"
    },
    {
      name: "Heartland Valuation Network",
      phone: "(855) 555-0114",
      email: "partners@heartlandvn.com",
      state: "IL",
      website: "https://heartlandvn.com",
      signup_url: "https://heartlandvn.com/appraisers"
    },
    {
      name: "Atlantic Coast Valuations",
      phone: "(844) 555-0165",
      email: "vendors@atlanticcoastval.com",
      state: "NC",
      website: "https://atlanticcoastval.com", 
      signup_url: "https://atlanticcoastval.com/appraiser-signup"
    },
    {
      name: "Mountain View AMC",
      phone: "(866) 555-0198",
      email: "appraisers@mountainviewamc.com",
      state: "CO",
      website: "https://mountainviewamc.com",
      signup_url: "https://mountainviewamc.com/register-appraiser"
    },
    {
      name: "Northwest Property Solutions", 
      phone: "(877) 555-0134",
      email: "join@nwpropsolutions.com",
      state: "WA",
      website: "https://nwpropsolutions.com",
      signup_url: "https://nwpropsolutions.com/vendor-portal"
    }
  ];
  
  // Insert companies using parameterized queries to prevent SQL injection
  for (const company of companies) {
    await sql`
      INSERT INTO amc_companies (name, phone, email, state, website, signup_url)
      VALUES (${company.name}, ${company.phone}, ${company.email}, ${company.state}, ${company.website}, ${company.signup_url})
    `;
  }
  
  console.log(`✅ Inserted ${companies.length} companies`);
}

export async function checkDatabaseHealth() {
  try {
    // Test basic connectivity
    const result = await sql`SELECT NOW() as timestamp, version() as version`;
    
    // Check if tables exist
    const tablesResult = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'amc_companies'
    `;
    
    const hasRequiredTables = tablesResult.length > 0;
    
    return {
      success: true,
      connected: true,
      hasRequiredTables,
      timestamp: result[0].timestamp,
      message: hasRequiredTables ? 
        "Database is healthy and ready" : 
        "Database connected but tables need initialization"
    };
  } catch (error) {
    return {
      success: false,
      connected: false,
      hasRequiredTables: false,
      error: error instanceof Error ? error.message : "Unknown error",
      message: "Database connection failed"
    };
  }
}