import XLSX from 'xlsx';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { Beverage, BeverageGroup } from '../types/beverage';

interface ExcelRowData {
  groupId?: string | null;
  groupEnglishName?: string | null;
  groupVietnameseName?: string | null;
  beverageVietnameseName?: string | null;
  beverageEnglishName?: string | null;
  ingredientName?: string | null;
  unitsOfMeasurement?: string | null;
  quantity?: string | number | null;
  instruction?: string | null;
}

function parseExcelFile(filePath: string): { groups: BeverageGroup[]; beverages: Beverage[] } {
  // Read the Excel file
  const workbook = XLSX.readFile(filePath);
  
  // Get the first sheet
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // Convert to JSON with headers in row 1
  const rawData = XLSX.utils.sheet_to_json(worksheet, { 
    header: ['groupId', 'groupEnglishName', 'groupVietnameseName', 'beverageVietnameseName', 'beverageEnglishName', 'ingredientName', 'unitsOfMeasurement', 'quantity', 'instruction'],
    defval: null,
    raw: false
  }) as ExcelRowData[];
  
  // Skip the header row (first row)
  const rows = rawData.slice(1);
  
  // Parse rows into structured data
  const groupMap = new Map<string, BeverageGroup>();
  const beverages: Beverage[] = [];
  
  let currentGroup: BeverageGroup | null = null;
  let currentBeverage: Partial<Beverage> | null = null;
  let currentBeverageIngredients: Beverage["ingredients"] = [];
  let currentBeverageInstructions: string[] = [];
  
  // Helper function to check if a string is a header/unit (should be filtered out)
  const isInvalidName = (name: string | undefined | null): boolean => {
    if (!name || typeof name !== 'string' || name.trim().length < 2) return true;
    const lowerName = name.toLowerCase().trim();
    // Filter out common unit names and header values - be very specific
    const invalidNames = ['gr', 'ml', 'que', 'cups', 'kg', 'g', 'l'];
    // Only filter if the entire string matches these patterns, not if it contains them
    const headerExactMatches = ['công thức', 'cng thc', 'nhãn hiệu', 'nhãn hiu', 'tên món', 'thành phần nguyên liệu', 'stt', 'mixed', 'biên hoà'];
    
    // Check exact matches
    if (invalidNames.includes(lowerName) || headerExactMatches.includes(lowerName)) {
      return true;
    }
    
    // Check for header keywords only if the name is very short or matches exactly
    const headerKeywords = ['công thức', 'nhãn hiệu', 'tên món', 'thành phần', 'stt'];
    if (headerKeywords.some(keyword => lowerName === keyword)) {
      return true;
    }
    
    return false;
  };

  // Helper function to finalize current beverage
  const finalizeBeverage = () => {
    if (currentBeverage && 
        currentBeverage.englishName && 
        currentBeverage.vietnameseName &&
        !isInvalidName(currentBeverage.englishName) &&
        !isInvalidName(currentBeverage.vietnameseName)) {
      // Allow beverages even without ingredients/instructions (they might be added later)
      beverages.push({
        id: currentBeverage.id || 
            (currentBeverage.englishName || "").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
        englishName: currentBeverage.englishName,
        vietnameseName: currentBeverage.vietnameseName,
        groupId: currentBeverage.groupId,
        ingredients: [...currentBeverageIngredients],
        instructionSteps: [...currentBeverageInstructions.filter(Boolean)], // Remove empty strings
      });
    }
    currentBeverageIngredients = [];
    currentBeverageInstructions = [];
  };
  
  rows.forEach((row: ExcelRowData) => {
    // Extract values from row (handle null/undefined)
    const groupId = row.groupId?.toString().trim();
    const groupEnglishName = row.groupEnglishName?.toString().trim();
    const groupVietnameseName = row.groupVietnameseName?.toString().trim();
    const beverageVietnameseName = row.beverageVietnameseName?.toString().trim();
    const beverageEnglishName = row.beverageEnglishName?.toString().trim();
    const ingredientName = row.ingredientName?.toString().trim();
    const unitsOfMeasurement = row.unitsOfMeasurement?.toString().trim();
    const quantity = row.quantity;
    const instruction = row.instruction?.toString().trim();
    
    // Skip header rows (group ID is "STT" or similar header indicators)
    const isHeaderRow = groupId && (
      groupId.toUpperCase() === 'STT' || 
      groupEnglishName?.toUpperCase().includes('TÊN MÓN') ||
      groupEnglishName?.toUpperCase().includes('CÔNG THỨC') ||
      groupEnglishName?.toUpperCase().includes('THÀNH PHẦN')
    );
    
    if (isHeaderRow) {
      // Skip header rows
      return;
    }
    
    // Check if this row starts a new group (has group ID and valid names)
    if (groupId && groupEnglishName && groupVietnameseName && 
        !isInvalidName(groupEnglishName) && 
        !isInvalidName(groupVietnameseName)) {
      // Finalize previous beverage if exists
      finalizeBeverage();
      
      currentGroup = {
        id: groupId,
        englishName: groupEnglishName,
        vietnameseName: groupVietnameseName,
      };
      
      if (!groupMap.has(groupId)) {
        groupMap.set(groupId, currentGroup);
      }
    }
    
    // Check if this row starts a new beverage (has beverage names and they're valid)
    if (beverageVietnameseName && beverageEnglishName &&
        !isInvalidName(beverageVietnameseName) &&
        !isInvalidName(beverageEnglishName)) {
      // Finalize previous beverage
      finalizeBeverage();
      
      currentBeverage = {
        id: beverageEnglishName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
        englishName: beverageEnglishName,
        vietnameseName: beverageVietnameseName,
        groupId: currentGroup?.id,
      };
    }
    
    // Add ingredient if present
    if (ingredientName && unitsOfMeasurement && quantity !== null && quantity !== undefined) {
      const numQuantity = typeof quantity === 'number' ? quantity : parseFloat(quantity.toString());
      if (!isNaN(numQuantity)) {
        currentBeverageIngredients.push({
          name: ingredientName,
          unitsOfMeasurement: unitsOfMeasurement,
          quantity: numQuantity,
        });
      }
    }
    
    // Add instruction if present
    if (instruction) {
      currentBeverageInstructions.push(instruction);
    }
  });
  
  // Finalize the last beverage
  finalizeBeverage();
  
  // Filter out invalid groups (headers)
  const validGroups = Array.from(groupMap.values()).filter(group => 
    !isInvalidName(group.englishName) && 
    !isInvalidName(group.vietnameseName) &&
    group.id !== 'STT'
  );
  
  // Filter beverages - beverages are already validated when created, so minimal filtering needed
  const validBeverages = beverages.filter(beverage => {
    // Double-check names aren't invalid (should already be filtered, but just in case)
    if (isInvalidName(beverage.englishName) || isInvalidName(beverage.vietnameseName)) {
      return false;
    }
    // If beverage has a groupId, ensure the group exists in validGroups
    // If no groupId, still include the beverage
    if (beverage.groupId) {
      return validGroups.some(group => group.id === beverage.groupId);
    }
    // Include beverages without groupId (they might be orphaned but valid)
    return true;
  });
  
  console.log(`After filtering: ${validBeverages.length} beverages remain (from ${beverages.length} total)`);
  
  return {
    groups: validGroups,
    beverages: validBeverages,
  };
}

// Main execution
const excelFilePath = join(process.cwd(), 'Menu in-3 2.xlsx');
const outputFilePath = join(process.cwd(), 'mocks', 'beverage-data.ts');

try {
  console.log('Reading Excel file:', excelFilePath);
  const { groups, beverages } = parseExcelFile(excelFilePath);
  
  console.log(`Parsed ${groups.length} groups and ${beverages.length} beverages`);
  
  // Generate TypeScript file with the data
  const output = `// Auto-generated from Menu in-3 2.xlsx
// Do not edit manually - regenerate using: npm run parse-excel

import { Beverage, BeverageGroup } from '../types/beverage';

export const beverageGroups: BeverageGroup[] = ${JSON.stringify(groups, null, 2)};

export const beverages: Beverage[] = ${JSON.stringify(beverages, null, 2)};

// Helper function to get all data
export function getAllBeverageData() {
  return {
    groups: beverageGroups,
    beverages: beverages,
  };
}
`;
  
  writeFileSync(outputFilePath, output, 'utf8');
  console.log('Generated file:', outputFilePath);
  console.log('\nSummary:');
  console.log(`- Groups: ${groups.length}`);
  console.log(`- Beverages: ${beverages.length}`);
  groups.forEach(group => {
    const groupBeverages = beverages.filter(b => b.groupId === group.id);
    console.log(`  - ${group.englishName} (${group.vietnameseName}): ${groupBeverages.length} beverages`);
  });
  
} catch (error) {
  console.error('Error parsing Excel file:', error);
  process.exit(1);
}
