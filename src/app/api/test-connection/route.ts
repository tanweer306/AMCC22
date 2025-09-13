import { NextResponse } from "next/server";
import { testConnection } from "@/lib/database";

export async function GET() {
  try {
    console.log("🧪 API endpoint called: /api/test-connection");

    const result = await testConnection();

    return NextResponse.json({
      success: result.success,
      message: result.success ?
      "Database connection successful!" :
      "Database connection failed",
      timestamp: result.success ? result.data?.current_time : undefined,
      // Remove sensitive environment information in production
      ...(process.env.NODE_ENV === "development" && {
        environment: {
          user: process.env.PGUSER,
          host: process.env.PGHOST,
          port: process.env.PGPORT,
          database: process.env.PGDATABASE
        }
      })
    });
  } catch (error) {
    console.error("❌ Test connection API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "API error during connection test",
        // Only show detailed errors in development
        ...(process.env.NODE_ENV === "development" && {
          error: error instanceof Error ? error.message : "Unknown error"
        })
      },
      { status: 500 }
    );
  }
}