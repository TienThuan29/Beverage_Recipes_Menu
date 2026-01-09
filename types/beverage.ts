export type BeverageGroup = {
      id: string;
      englishName: string;
      vietnameseName: string;
}

export type Beverage = {
      id: string;
      englishName: string;
      vietnameseName: string;
      ingredients: {
            name: string;
            brand: string;
            unitsOfMeasurement: string;
            quantity: number;
      }[];
      instructionSteps: string[];
}