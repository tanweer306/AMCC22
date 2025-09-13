import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/database";
import { AMCCompany } from "@/types";

export async function GET(request: NextRequest) {
  try {
    console.log("🔄 Fetching companies from database...");

    // Query to fetch all companies from amc_companies table
    const result = await query(`
      SELECT 
        id,
        name,
        phone,
        email,
        state,
        website,
        signup_url
      FROM amc_companies 
      ORDER BY name ASC
    `);

    console.log(`✅ Found ${result.rowCount} companies`);

    // Transform the data to match our AMCCompany type
    const companies: AMCCompany[] = result.rows.map((row: any) => ({
      id: row.id.toString(), // Convert to string to match our type
      name: row.name || "",
      phone: row.phone || "",
      email: row.email || "",
      state: row.state || "",
      website: row.website || "",
      signupUrl: row.signup_url || "" // Note: using snake_case from DB
    }));

    return NextResponse.json({ companies }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching companies:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch companies",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}