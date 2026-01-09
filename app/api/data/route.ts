import { NextResponse } from "next/server";
import { fetchBeveragesFromStructuredSheet } from "../../../services/google-sheet";

export async function GET() {
  try {
    const data = await fetchBeveragesFromStructuredSheet();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error in /api/data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
