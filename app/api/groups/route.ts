import { NextResponse } from "next/server";
import { beverageGroups } from "../../../mocks/beverage.mock";

export async function GET() {
  try {
    return NextResponse.json({ groups: beverageGroups }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/groups:", error);
    return NextResponse.json(
      { error: "Failed to fetch groups", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
