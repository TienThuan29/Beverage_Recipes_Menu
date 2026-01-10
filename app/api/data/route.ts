import { NextResponse } from "next/server";
import { getAllBeverageData } from "../../../mocks/beverage.mock";

export async function GET() {
  try {
    const data = getAllBeverageData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error in /api/data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
