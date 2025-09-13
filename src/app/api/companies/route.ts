import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/database";
import { AMCCompany } from "@/types";
import { validateSearchParams, validatePaginationParams } from "@/lib/validation";

// Rate limiting - simple in-memory store (for production, use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per minute per IP

function isRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const clientData = requestCounts.get(clientIP);
  
  if (!clientData || now > clientData.resetTime) {
    requestCounts.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  clientData.count++;
  return false;
}

export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { 
          status: 429,
          headers: {
            'Retry-After': '60'
          }
        }
      );
    }

    const { searchParams } = new URL(request.url);
    
    // Validate and sanitize query parameters
    const searchValidation = validateSearchParams(
      searchParams.get('q'), 
      searchParams.get('state')
    );
    
    const paginationValidation = validatePaginationParams(
      searchParams.get('page'),
      searchParams.get('limit')
    );

    if (!searchValidation.isValid) {
      return NextResponse.json(
        { 
          error: "Invalid search parameters",
          details: searchValidation.errors
        },
        { status: 400 }
      );
    }

    if (!paginationValidation.isValid) {
      return NextResponse.json(
        { 
          error: "Invalid pagination parameters",
          details: paginationValidation.errors
        },
        { status: 400 }
      );
    }

    const { query: searchQuery, state: stateFilter } = searchValidation.sanitizedData!;
    const { page, limit } = paginationValidation.sanitizedData!;
    const offset = (page - 1) * limit;

    if (process.env.NODE_ENV === "development") {
      console.log("🔄 Fetching companies from database...");
    }

    // Execute secure parameterized queries using postgres library properly
    let companiesResult, countResult;
    
    if (searchQuery && searchQuery.length > 0 && stateFilter && stateFilter !== 'ALL') {
      // Both search query and state filter
      [companiesResult, countResult] = await Promise.all([
        sql`
          SELECT 
            id, name, phone, email, state, website, signup_url, created_at
          FROM amc_companies 
          WHERE name ILIKE ${`%${searchQuery}%`} AND state = ${stateFilter}
          ORDER BY name ASC
          LIMIT ${limit}
          OFFSET ${offset}
        `,
        sql`
          SELECT COUNT(*) as total
          FROM amc_companies
          WHERE name ILIKE ${`%${searchQuery}%`} AND state = ${stateFilter}
        `
      ]);
    } else if (searchQuery && searchQuery.length > 0) {
      // Only search query
      [companiesResult, countResult] = await Promise.all([
        sql`
          SELECT 
            id, name, phone, email, state, website, signup_url, created_at
          FROM amc_companies 
          WHERE name ILIKE ${`%${searchQuery}%`}
          ORDER BY name ASC
          LIMIT ${limit}
          OFFSET ${offset}
        `,
        sql`
          SELECT COUNT(*) as total
          FROM amc_companies
          WHERE name ILIKE ${`%${searchQuery}%`}
        `
      ]);
    } else if (stateFilter && stateFilter !== 'ALL') {
      // Only state filter
      [companiesResult, countResult] = await Promise.all([
        sql`
          SELECT 
            id, name, phone, email, state, website, signup_url, created_at
          FROM amc_companies 
          WHERE state = ${stateFilter}
          ORDER BY name ASC
          LIMIT ${limit}
          OFFSET ${offset}
        `,
        sql`
          SELECT COUNT(*) as total
          FROM amc_companies
          WHERE state = ${stateFilter}
        `
      ]);
    } else {
      // No filters
      [companiesResult, countResult] = await Promise.all([
        sql`
          SELECT 
            id, name, phone, email, state, website, signup_url, created_at
          FROM amc_companies 
          ORDER BY name ASC
          LIMIT ${limit}
          OFFSET ${offset}
        `,
        sql`
          SELECT COUNT(*) as total
          FROM amc_companies
        `
      ]);
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`✅ Found ${companiesResult.length} companies`);
    }

    // Transform and sanitize the data
    const companies: AMCCompany[] = companiesResult.map((row: any) => ({
      id: row.id.toString(),
      name: row.name || "",
      phone: row.phone || "",
      email: row.email || "",
      state: row.state || "",
      website: row.website || "",
      signupUrl: row.signup_url || ""
    }));

    const totalCount = parseInt(countResult[0].total);

    return NextResponse.json({ 
      companies,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=300', // 5 minute cache
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error("❌ Error fetching companies:", error);
    
    return NextResponse.json(
      {
        error: "Failed to fetch companies",
        // Only show detailed errors in development
        ...(process.env.NODE_ENV === "development" && {
          details: error instanceof Error ? error.message : String(error)
        })
      },
      { status: 500 }
    );
  }
}