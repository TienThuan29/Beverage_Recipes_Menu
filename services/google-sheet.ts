import { google } from "googleapis";
import { BeverageGroup, Beverage } from "../types/beverage";
import { readFileSync } from "fs";
import { join } from "path";

// Initialize Google Sheets API
const getAuth = () => {
  // Try to use environment variables first, fallback to service account file
  let credentials;
  
  if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    credentials = {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
  } else {
    // Use service account file as fallback
    try {
      const serviceAccountPath = join(process.cwd(), "service_account.json");
      const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));
      credentials = {
        client_email: serviceAccount.client_email,
        private_key: serviceAccount.private_key,
      };
    } catch {
      throw new Error(
        "Google Sheets credentials not found. Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY environment variables, or ensure service_account.json exists."
      );
    }
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  return auth;
};

// Get Google Sheets client
const getSheetsClient = async () => {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
};

// Fetch all data from Google Sheets
export async function fetchBeverageGroups(): Promise<BeverageGroup[]> {
  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID environment variable is not set");
  }

  try {
    // Fetch groups from "Groups" sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Groups!A2:C", // Assuming headers in row 1, data starts from row 2
    });

    const rows = response.data.values || [];
    const groups: BeverageGroup[] = rows
      .filter((row) => row.length >= 3 && row[0] && row[1] && row[2]) // Filter out empty rows
      .map((row) => ({
        id: row[0].trim().toLowerCase().replace(/\s+/g, "-"), // Convert to slug
        englishName: row[1].trim(),
        vietnameseName: row[2].trim(),
      }));

    return groups;
  } catch (error) {
    console.error("Error fetching beverage groups:", error);
    throw error;
  }
}

// Fetch all beverages from Google Sheets
export async function fetchBeverages(): Promise<Beverage[]> {
  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID environment variable is not set");
  }

  try {
    // Fetch beverages from "Beverages" sheet
    // Expected columns: ID, English Name, Vietnamese Name, Group ID, Ingredients (JSON or delimited), Instructions (JSON or delimited)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Beverages!A2:F", // Adjust range based on your sheet structure
    });

    const rows = response.data.values || [];
    const beverages: Beverage[] = rows
      .filter((row) => row.length >= 3 && row[0] && row[1] && row[2]) // Filter out empty rows
      .map((row) => {
        // Parse ingredients - assuming they're stored as JSON string or delimited
        let ingredients: Beverage["ingredients"] = [];
        if (row[4]) {
          try {
            // Try parsing as JSON first
            ingredients = JSON.parse(row[4]);
          } catch {
            // If not JSON, try parsing as delimited string (e.g., "name|brand|quantity|units")
            // For now, we'll use a simple format
            ingredients = [];
          }
        }

        // Parse instruction steps - assuming they're stored as JSON array or newline-delimited
        let instructionSteps: string[] = [];
        if (row[5]) {
          try {
            instructionSteps = JSON.parse(row[5]);
          } catch {
            // If not JSON, split by newline or semicolon
            instructionSteps = row[5].split(/\n|;/).filter((step: string) => step.trim());
          }
        }

        return {
          id: row[0].trim().toLowerCase().replace(/\s+/g, "-"), // Convert to slug
          englishName: row[1].trim(),
          vietnameseName: row[2].trim(),
          ingredients,
          instructionSteps,
        };
      });

    return beverages;
  } catch (error) {
    console.error("Error fetching beverages:", error);
    throw error;
  }
}

// Main function: Fetch from a single sheet with structured format
// This function parses the actual sheet structure where:
// - Column A: Group ID (merged cells, appears on first row of group)
// - Column B: Group English Name (merged cells)
// - Column C: Group Vietnamese Name (merged cells)
// - Column D: Beverage Vietnamese Name (only on first row of beverage)
// - Column E: Beverage English Name (only on first row of beverage)
// - Column F: Ingredient Name (multiple rows per beverage)
// - Column G: Units Of Measurement (multiple rows per beverage)
// - Column H: Quantity (multiple rows per beverage)
// - Column I: Instructions (multiple rows per beverage, can span across rows)
export async function fetchBeveragesFromStructuredSheet(): Promise<{
  groups: BeverageGroup[];
  beverages: Beverage[];
}> {
  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID environment variable is not set. Please add it to your .env.local file.");
  }

  try {
    // First, try to get sheet names to find the correct sheet
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const sheetName = spreadsheet.data.sheets?.[0]?.properties?.title || "Sheet1";

    // Fetch from the first sheet - start from row 2 to skip headers
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A2:I`, // Columns A through I
    });

    const rows = response.data.values || [];
    const groupMap = new Map<string, BeverageGroup>();
    const beverages: Beverage[] = [];

    // Track current group and beverage while iterating
    let currentGroup: BeverageGroup | null = null;
    let currentBeverage: Partial<Beverage> | null = null;
    let currentBeverageIngredients: Beverage["ingredients"] = [];
    let currentBeverageInstructions: string[] = [];

    // Helper function to finalize current beverage
    const finalizeBeverage = () => {
      if (currentBeverage && currentBeverage.englishName && currentBeverage.vietnameseName) {
        beverages.push({
          id: currentBeverage.id || 
              (currentBeverage.englishName || "").toLowerCase().replace(/\s+/g, "-"),
          englishName: currentBeverage.englishName,
          vietnameseName: currentBeverage.vietnameseName,
          groupId: currentBeverage.groupId,
          ingredients: [...currentBeverageIngredients],
          instructionSteps: [...currentBeverageInstructions],
        });
      }
      currentBeverageIngredients = [];
      currentBeverageInstructions = [];
    };

    rows.forEach((row) => {
      if (!row || row.length === 0) return; // Skip completely empty rows

      // Check for new group (columns A, B, C are populated)
      // In merged cells, these values appear on the first row of the group
      if (row[0] && row[1] && row[2]) {
        const groupId = row[0].toString().trim().toLowerCase().replace(/\s+/g, "-");
        if (!groupMap.has(groupId)) {
          const newGroup: BeverageGroup = {
            id: groupId,
            englishName: row[1].toString().trim(),
            vietnameseName: row[2].toString().trim(),
          };
          groupMap.set(groupId, newGroup);
          currentGroup = newGroup;
        } else {
          currentGroup = groupMap.get(groupId) || null;
        }
      }

      // Check for new beverage (columns D and E are populated)
      // When D and E have values, it means a new beverage starts
      if (row[3] && row[4]) {
        // Finalize previous beverage before starting a new one
        finalizeBeverage();

        // Start new beverage
        const beverageVietnameseName = row[3].toString().trim();
        const beverageEnglishName = row[4].toString().trim();
        const beverageId = beverageEnglishName.toLowerCase().replace(/\s+/g, "-");

        currentBeverage = {
          id: beverageId,
          englishName: beverageEnglishName,
          vietnameseName: beverageVietnameseName,
          groupId: currentGroup?.id,
        };
        currentBeverageIngredients = [];
        currentBeverageInstructions = [];

        // Check if there's an ingredient on this row (columns F, G, H)
        if (row[5]) {
          const ingredientName = row[5].toString().trim();
          if (ingredientName) {
            const unitsOfMeasurement = row[6]?.toString().trim() || "";
            const quantityStr = row[7]?.toString().trim() || "0";
            const quantity = parseFloat(quantityStr) || 0;

            currentBeverageIngredients.push({
              name: ingredientName,
              brand: "", // Brand is not in the sheet structure
              quantity,
              unitsOfMeasurement,
            });
          }
        }

        // Check if there's an instruction on this row (column I)
        // Instructions can be multi-line with each line starting with "-" as a separate step
        if (row[8]) {
          const instructionText = row[8].toString();
          // Split by newlines and process each line
          const instructionLines = instructionText.split(/\n|\r\n/);
          instructionLines.forEach((line: string) => {
            const trimmedLine = line.trim();
            if (trimmedLine) {
              // If line starts with "-", remove it and add as a step
              if (trimmedLine.startsWith("-")) {
                currentBeverageInstructions.push(trimmedLine.substring(1).trim());
              } else {
                // If no "-" prefix, add the line as-is
                currentBeverageInstructions.push(trimmedLine);
              }
            }
          });
        }
      } else if (currentBeverage) {
        // This row continues the current beverage (D and E are empty)
        // Add ingredient if present (columns F, G, H)
        if (row[5]) {
          const ingredientName = row[5].toString().trim();
          if (ingredientName) {
            const unitsOfMeasurement = row[6]?.toString().trim() || "";
            const quantityStr = row[7]?.toString().trim() || "0";
            const quantity = parseFloat(quantityStr) || 0;

            currentBeverageIngredients.push({
              name: ingredientName,
              brand: "", // Brand is not in the sheet structure
              quantity,
              unitsOfMeasurement,
            });
          }
        }

        // Add instruction if present (column I)
        // Instructions can be multi-line with each line starting with "-" as a separate step
        if (row[8]) {
          const instructionText = row[8].toString();
          // Split by newlines and process each line
          const instructionLines = instructionText.split(/\n|\r\n/);
          instructionLines.forEach((line: string) => {
            const trimmedLine = line.trim();
            if (trimmedLine) {
              // If line starts with "-", remove it and add as a step
              if (trimmedLine.startsWith("-")) {
                currentBeverageInstructions.push(trimmedLine.substring(1).trim());
              } else {
                // If no "-" prefix, add the line as-is
                currentBeverageInstructions.push(trimmedLine);
              }
            }
          });
        }
      }
    });

    // Finalize the last beverage
    finalizeBeverage();

    return {
      groups: Array.from(groupMap.values()),
      beverages,
    };
  } catch (error) {
    console.error("Error fetching from structured sheet:", error);
    throw error;
  }
}
