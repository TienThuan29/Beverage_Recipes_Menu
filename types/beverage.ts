export type BeverageGroup = {
      id: string;
      englishName: string;
      vietnameseName: string;
}

export type Beverage = {
      id: string;
      englishName: string;
      vietnameseName: string;
      groupId?: string; // Optional group ID to link beverage to its group
      ingredients: {
            name: string;
            brand?: string; // Optional - not present in sheet structure
            unitsOfMeasurement: string;
            quantity: number;
      }[];
      instructionSteps: string[];
}