import { NextResponse } from "next/server";
import { fetchBeveragesFromStructuredSheet } from "../../../services/google-sheet";

export async function GET() {
  try {
    const { groups } = await fetchBeveragesFromStructuredSheet();
    return NextResponse.json({ groups }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/groups:", error);
    return NextResponse.json(
      { error: "Failed to fetch groups", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
