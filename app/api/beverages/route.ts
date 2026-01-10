import { NextResponse } from "next/server";
import { beverages } from "../../../mocks/beverage.mock";

export async function GET() {
  try {
    return NextResponse.json({ beverages }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/beverages:", error);
    return NextResponse.json(
      { error: "Failed to fetch beverages", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
