import { NextResponse } from "next/server";
import { beverages } from "../../../../mocks/beverage.mock";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Debug logging
    console.log(`Looking for beverage with id: "${id}"`);
    console.log(`Total beverages found: ${beverages.length}`);
    if (beverages.length > 0) {
      console.log(`Available beverage IDs: ${beverages.map(b => b.id).join(", ")}`);
    }
    
    const beverage = beverages.find((b) => b.id === id);
    
    if (!beverage) {
      return NextResponse.json(
        { 
          error: "Beverage not found",
          searchedId: id,
          availableIds: beverages.map(b => b.id),
          totalBeverages: beverages.length
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ beverage }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/beverages/[id]:", error);
    return NextResponse.json(
      { error: "Failed to fetch beverage", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
