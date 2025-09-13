import { NextResponse } from "next/server";
import { initializeDatabase, checkDatabaseHealth } from "@/lib/init-database";

export async function POST() {
  try {
    console.log("🔧 Database initialization API called");
    
    const result = await initializeDatabase();
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message
      }, { status: 200 });
    } else {
      return NextResponse.json({
        success: false,
        message: "Database initialization failed",
        // Only show detailed errors in development
        ...(process.env.NODE_ENV === "development" && {
          error: result.error
        })
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error("❌ Database initialization API error:", error);
    return NextResponse.json({
      success: false,
      message: "API error during database initialization",
      // Only show detailed errors in development
      ...(process.env.NODE_ENV === "development" && {
        error: error instanceof Error ? error.message : "Unknown error"
      })
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log("🔍 Database health check API called");
    
    const result = await checkDatabaseHealth();
    
    return NextResponse.json({
      ...result,
      // Only include version info in development
      ...(process.env.NODE_ENV === "development" && result.success && {
        timestamp: result.timestamp
      })
    }, { 
      status: result.success ? 200 : 500 
    });
    
  } catch (error) {
    console.error("❌ Database health check API error:", error);
    return NextResponse.json({
      success: false,
      connected: false,
      hasRequiredTables: false,
      message: "Health check failed",
      // Only show detailed errors in development
      ...(process.env.NODE_ENV === "development" && {
        error: error instanceof Error ? error.message : "Unknown error"
      })
    }, { status: 500 });
  }
}