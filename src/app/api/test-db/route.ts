import { NextResponse } from "next/server";
import { query } from "@/lib/database";

export async function GET() {
  try {
    console.log("🔍 Testing database connection...");

    // Test basic connection
    const timeResult = await query("SELECT NOW() as current_time");
    console.log("✅ Connection successful!");

    // Check if amc_companies table exists
    const tableCheck = await query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'amc_companies'
      ORDER BY ordinal_position;
    `);

    let tableInfo = {};
    let sampleData = [];
    let recordCount = 0;

    if (tableCheck.rows.length > 0) {
      console.log("✅ amc_companies table found!");
      tableInfo = tableCheck.rows;

      // Check row count
      const countResult = await query(
        "SELECT COUNT(*) as count FROM amc_companies"
      );
      recordCount = parseInt(countResult.rows[0].count);
      console.log(`📊 Total records: ${recordCount}`);

      // Show sample data
      const sampleResult = await query("SELECT * FROM amc_companies LIMIT 3");
      sampleData = sampleResult.rows;
      console.log("📋 Sample data:", sampleData);
    } else {
      console.log("❌ amc_companies table not found!");

      // Check for tables with similar names
      const similarTables = await query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE (table_name ILIKE '%amc%' OR table_name ILIKE '%company%' OR table_name ILIKE '%companies%')
        AND table_schema = 'public'
      `);

      console.log("🔍 Similar tables found:", similarTables.rows);
    }

    return NextResponse.json({
      status: "success",
      message: "Database connected successfully",
      currentTime: timeResult.rows[0].current_time,
      tableExists: tableCheck.rows.length > 0,
      tableStructure: tableInfo,
      recordCount: recordCount,
      sampleData: sampleData
    });
  } catch (error) {
    console.error("❌ Database test failed:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}