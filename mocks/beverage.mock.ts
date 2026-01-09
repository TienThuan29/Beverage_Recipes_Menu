import { BeverageGroup, Beverage } from "../types/beverage";

export const beverageGroups: BeverageGroup[] = [
  {
    id: "coffee",
    englishName: "Coffee Drinks",
    vietnameseName: "Đồ Uống Cà Phê",
  },
  {
    id: "tea",
    englishName: "Tea Beverages",
    vietnameseName: "Đồ Uống Trà",
  },
  {
    id: "smoothies",
    englishName: "Smoothies & Juices",
    vietnameseName: "Sinh Tố & Nước Ép",
  },
  {
    id: "cocktails",
    englishName: "Cocktails & Mocktails",
    vietnameseName: "Cocktail & Mocktail",
  },
];

export const beverages: Beverage[] = [
  // Coffee Drinks Group
  {
    id: "espresso",
    englishName: "Espresso",
    vietnameseName: "Espresso",
    ingredients: [
      {
        name: "Coffee Beans",
        brand: "Arabica Premium",
        unitsOfMeasurement: "grams",
        quantity: 18,
      },
      {
        name: "Water",
        brand: "Filtered",
        unitsOfMeasurement: "ml",
        quantity: 30,
      },
    ],
    instructionSteps: [
      "Grind 18g of coffee beans to fine consistency",
      "Heat water to 90-96°C (195-205°F)",
      "Tamp the ground coffee evenly in the portafilter",
      "Extract for 25-30 seconds to get 30ml of espresso",
      "Serve immediately in a preheated cup",
    ],
  },
  {
    id: "cappuccino",
    englishName: "Cappuccino",
    vietnameseName: "Cappuccino",
    ingredients: [
      {
        name: "Espresso",
        brand: "House Blend",
        unitsOfMeasurement: "shots",
        quantity: 1,
      },
      {
        name: "Whole Milk",
        brand: "Fresh",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Sugar",
        brand: "White",
        unitsOfMeasurement: "teaspoons",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Pull a single shot of espresso (30ml)",
      "Steam 150ml of whole milk to 65°C with microfoam",
      "Pour steamed milk over espresso",
      "Create latte art with remaining foam",
      "Serve immediately",
    ],
  },
  {
    id: "latte",
    englishName: "Caffe Latte",
    vietnameseName: "Cà Phê Latte",
    ingredients: [
      {
        name: "Espresso",
        brand: "House Blend",
        unitsOfMeasurement: "shots",
        quantity: 2,
      },
      {
        name: "Steamed Milk",
        brand: "Whole",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
      {
        name: "Vanilla Syrup",
        brand: "Premium",
        unitsOfMeasurement: "pumps",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Pull a double shot of espresso (60ml)",
      "Steam 200ml of milk to 60-65°C",
      "Pour steamed milk into the espresso",
      "Add a thin layer of foam on top",
      "Optional: Add vanilla syrup or cinnamon",
    ],
  },
  {
    id: "americano",
    englishName: "Americano",
    vietnameseName: "Americano",
    ingredients: [
      {
        name: "Espresso",
        brand: "House Blend",
        unitsOfMeasurement: "shots",
        quantity: 2,
      },
      {
        name: "Hot Water",
        brand: "Filtered",
        unitsOfMeasurement: "ml",
        quantity: 200,
      },
    ],
    instructionSteps: [
      "Pull a double shot of espresso",
      "Heat 200ml of water to 90°C",
      "Pour hot water over the espresso",
      "Stir gently to combine",
      "Serve hot",
    ],
  },
  {
    id: "mocha",
    englishName: "Mocha",
    vietnameseName: "Mocha",
    ingredients: [
      {
        name: "Espresso",
        brand: "House Blend",
        unitsOfMeasurement: "shots",
        quantity: 2,
      },
      {
        name: "Chocolate Syrup",
        brand: "Premium Dark",
        unitsOfMeasurement: "tablespoons",
        quantity: 2,
      },
      {
        name: "Steamed Milk",
        brand: "Whole",
        unitsOfMeasurement: "ml",
        quantity: 150,
      },
      {
        name: "Whipped Cream",
        brand: "Fresh",
        unitsOfMeasurement: "tablespoons",
        quantity: 2,
      },
    ],
    instructionSteps: [
      "Add chocolate syrup to the bottom of the cup",
      "Pull a double shot of espresso",
      "Stir to combine chocolate and espresso",
      "Steam 150ml of milk and pour over",
      "Top with whipped cream and chocolate shavings",
    ],
  },

  // Tea Beverages Group
  {
    id: "green-tea",
    englishName: "Green Tea",
    vietnameseName: "Trà Xanh",
    ingredients: [
      {
        name: "Green Tea Leaves",
        brand: "Jasmine Premium",
        unitsOfMeasurement: "teaspoons",
        quantity: 2,
      },
      {
        name: "Hot Water",
        brand: "Filtered",
        unitsOfMeasurement: "ml",
        quantity: 250,
      },
      {
        name: "Honey",
        brand: "Pure",
        unitsOfMeasurement: "teaspoons",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Heat water to 80°C (176°F) - not boiling",
      "Add 2 teaspoons of green tea leaves to teapot",
      "Pour hot water over the leaves",
      "Steep for 2-3 minutes",
      "Strain and serve hot",
    ],
  },
  {
    id: "black-tea",
    englishName: "Black Tea",
    vietnameseName: "Trà Đen",
    ingredients: [
      {
        name: "Black Tea Leaves",
        brand: "Earl Grey",
        unitsOfMeasurement: "teaspoons",
        quantity: 1,
      },
      {
        name: "Boiling Water",
        brand: "Filtered",
        unitsOfMeasurement: "ml",
        quantity: 250,
      },
      {
        name: "Milk",
        brand: "Whole",
        unitsOfMeasurement: "ml",
        quantity: 50,
      },
      {
        name: "Sugar",
        brand: "White",
        unitsOfMeasurement: "teaspoons",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Boil water to 100°C (212°F)",
      "Add 1 teaspoon of black tea leaves per cup",
      "Steep for 3-5 minutes",
      "Remove tea leaves",
      "Serve with milk, lemon, or honey as desired",
    ],
  },
  {
    id: "bubble-tea",
    englishName: "Bubble Tea",
    vietnameseName: "Trà Sữa",
    ingredients: [
      {
        name: "Black Tea",
        brand: "Strong Brew",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
      {
        name: "Tapioca Pearls",
        brand: "Premium Black",
        unitsOfMeasurement: "cups",
        quantity: 0.5,
      },
      {
        name: "Condensed Milk",
        brand: "Sweetened",
        unitsOfMeasurement: "tablespoons",
        quantity: 2,
      },
      {
        name: "Sugar",
        brand: "White",
        unitsOfMeasurement: "tablespoons",
        quantity: 1,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cook tapioca pearls according to package instructions",
      "Brew strong black tea and let cool",
      "Add condensed milk and sugar to taste",
      "Fill glass with ice cubes",
      "Pour tea mixture over ice",
      "Add cooked tapioca pearls",
      "Serve with a wide straw",
    ],
  },
  {
    id: "herbal-tea",
    englishName: "Herbal Tea",
    vietnameseName: "Trà Thảo Mộc",
    ingredients: [
      {
        name: "Herbal Tea Blend",
        brand: "Chamomile & Mint",
        unitsOfMeasurement: "teabags",
        quantity: 1,
      },
      {
        name: "Boiling Water",
        brand: "Filtered",
        unitsOfMeasurement: "ml",
        quantity: 250,
      },
      {
        name: "Honey",
        brand: "Pure",
        unitsOfMeasurement: "teaspoons",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Boil water to 100°C",
      "Place herbal tea bag in a cup",
      "Pour boiling water over the tea bag",
      "Steep for 5-7 minutes",
      "Remove tea bag and add honey if desired",
      "Serve hot or let cool for iced tea",
    ],
  },

  // Smoothies & Juices Group
  {
    id: "strawberry-smoothie",
    englishName: "Strawberry Smoothie",
    vietnameseName: "Sinh Tố Dâu Tây",
    ingredients: [
      {
        name: "Fresh Strawberries",
        brand: "Organic",
        unitsOfMeasurement: "cups",
        quantity: 1.5,
      },
      {
        name: "Yogurt",
        brand: "Greek",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
      {
        name: "Honey",
        brand: "Pure",
        unitsOfMeasurement: "tablespoons",
        quantity: 1,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Wash and hull 1.5 cups of fresh strawberries",
      "Add strawberries to blender",
      "Add 1 cup of yogurt or milk",
      "Add 1 tablespoon of honey",
      "Add 1 cup of ice cubes",
      "Blend until smooth",
      "Pour into glass and serve immediately",
    ],
  },
  {
    id: "mango-smoothie",
    englishName: "Mango Smoothie",
    vietnameseName: "Sinh Tố Xoài",
    ingredients: [
      {
        name: "Ripe Mango",
        brand: "Fresh",
        unitsOfMeasurement: "pieces",
        quantity: 2,
      },
      {
        name: "Coconut Milk",
        brand: "Premium",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
      {
        name: "Sugar",
        brand: "White",
        unitsOfMeasurement: "tablespoons",
        quantity: 1,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Peel and dice 2 ripe mangoes",
      "Add mango pieces to blender",
      "Add 1 cup of coconut milk",
      "Add 1 tablespoon of sugar (optional)",
      "Add ice cubes",
      "Blend until creamy and smooth",
      "Garnish with mint leaves",
    ],
  },
  {
    id: "orange-juice",
    englishName: "Fresh Orange Juice",
    vietnameseName: "Nước Cam Tươi",
    ingredients: [
      {
        name: "Fresh Oranges",
        brand: "Valencia",
        unitsOfMeasurement: "pieces",
        quantity: 4,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 0.5,
      },
    ],
    instructionSteps: [
      "Wash 4 fresh oranges",
      "Cut oranges in half",
      "Juice using a citrus juicer",
      "Strain to remove pulp (optional)",
      "Add ice cubes to serving glass",
      "Pour fresh juice and serve immediately",
    ],
  },
  {
    id: "green-smoothie",
    englishName: "Green Detox Smoothie",
    vietnameseName: "Sinh Tố Xanh Detox",
    ingredients: [
      {
        name: "Spinach",
        brand: "Fresh Organic",
        unitsOfMeasurement: "cups",
        quantity: 2,
      },
      {
        name: "Banana",
        brand: "Ripe",
        unitsOfMeasurement: "pieces",
        quantity: 1,
      },
      {
        name: "Apple",
        brand: "Fresh",
        unitsOfMeasurement: "pieces",
        quantity: 1,
      },
      {
        name: "Coconut Water",
        brand: "Pure",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
      {
        name: "Chia Seeds",
        brand: "Organic",
        unitsOfMeasurement: "tablespoons",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Wash 2 cups of fresh spinach",
      "Add spinach to blender",
      "Add 1 banana and 1 apple",
      "Add 1 cup of coconut water",
      "Add 1 tablespoon of chia seeds",
      "Blend until completely smooth",
      "Serve immediately for maximum nutrients",
    ],
  },
  {
    id: "watermelon-juice",
    englishName: "Watermelon Juice",
    vietnameseName: "Nước Ép Dưa Hấu",
    ingredients: [
      {
        name: "Watermelon",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 3,
      },
      {
        name: "Lime Juice",
        brand: "Fresh",
        unitsOfMeasurement: "tablespoons",
        quantity: 1,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Cut fresh watermelon into chunks",
      "Remove seeds if needed",
      "Add 3 cups of watermelon to blender",
      "Blend until smooth",
      "Strain through a fine mesh (optional)",
      "Add a squeeze of lime juice",
      "Serve chilled with ice",
    ],
  },

  // Cocktails & Mocktails Group
  {
    id: "mojito",
    englishName: "Mojito",
    vietnameseName: "Mojito",
    ingredients: [
      {
        name: "White Rum",
        brand: "Premium",
        unitsOfMeasurement: "oz",
        quantity: 2,
      },
      {
        name: "Fresh Mint Leaves",
        brand: "Garden Fresh",
        unitsOfMeasurement: "sprigs",
        quantity: 10,
      },
      {
        name: "Lime Juice",
        brand: "Fresh",
        unitsOfMeasurement: "oz",
        quantity: 1,
      },
      {
        name: "Sugar",
        brand: "White",
        unitsOfMeasurement: "tablespoons",
        quantity: 1,
      },
      {
        name: "Club Soda",
        brand: "Sparkling",
        unitsOfMeasurement: "oz",
        quantity: 3,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Muddle 10 mint leaves with 1 tablespoon of sugar",
      "Add juice of 1 lime",
      "Add 2 oz white rum",
      "Fill glass with ice cubes",
      "Top with club soda",
      "Stir gently and garnish with mint sprig",
      "Serve with a straw",
    ],
  },
  {
    id: "virgin-mojito",
    englishName: "Virgin Mojito",
    vietnameseName: "Mojito Không Cồn",
    ingredients: [
      {
        name: "Fresh Mint Leaves",
        brand: "Garden Fresh",
        unitsOfMeasurement: "sprigs",
        quantity: 10,
      },
      {
        name: "Lime Juice",
        brand: "Fresh",
        unitsOfMeasurement: "oz",
        quantity: 1,
      },
      {
        name: "Sugar",
        brand: "White",
        unitsOfMeasurement: "tablespoons",
        quantity: 1,
      },
      {
        name: "Club Soda",
        brand: "Sparkling",
        unitsOfMeasurement: "oz",
        quantity: 3,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Muddle 10 mint leaves with 1 tablespoon of sugar",
      "Add juice of 1 lime",
      "Fill glass with ice cubes",
      "Top with club soda or sparkling water",
      "Stir gently and garnish with mint",
      "Serve immediately",
    ],
  },
  {
    id: "pina-colada",
    englishName: "Piña Colada",
    vietnameseName: "Piña Colada",
    ingredients: [
      {
        name: "White Rum",
        brand: "Premium",
        unitsOfMeasurement: "oz",
        quantity: 1.5,
      },
      {
        name: "Coconut Cream",
        brand: "Premium",
        unitsOfMeasurement: "oz",
        quantity: 2,
      },
      {
        name: "Pineapple Juice",
        brand: "100% Pure",
        unitsOfMeasurement: "oz",
        quantity: 2,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
    ],
    instructionSteps: [
      "Add 2 oz coconut cream to blender",
      "Add 2 oz pineapple juice",
      "Add 1.5 oz white rum",
      "Add 1 cup of ice",
      "Blend until smooth and creamy",
      "Pour into a chilled glass",
      "Garnish with pineapple wedge and cherry",
    ],
  },
  {
    id: "fruit-punch",
    englishName: "Tropical Fruit Punch",
    vietnameseName: "Punch Trái Cây Nhiệt Đới",
    ingredients: [
      {
        name: "Pineapple Juice",
        brand: "100% Pure",
        unitsOfMeasurement: "cups",
        quantity: 2,
      },
      {
        name: "Orange Juice",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
      {
        name: "Cranberry Juice",
        brand: "100% Pure",
        unitsOfMeasurement: "cups",
        quantity: 1,
      },
      {
        name: "Lemon Juice",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 0.5,
      },
      {
        name: "Simple Syrup",
        brand: "Homemade",
        unitsOfMeasurement: "tablespoons",
        quantity: 2,
      },
      {
        name: "Ice Cubes",
        brand: "Fresh",
        unitsOfMeasurement: "cups",
        quantity: 2,
      },
    ],
    instructionSteps: [
      "Mix 2 cups pineapple juice with 1 cup orange juice",
      "Add 1 cup cranberry juice",
      "Add 1/2 cup lemon juice",
      "Sweeten with simple syrup to taste",
      "Add ice cubes to pitcher",
      "Stir well and serve chilled",
      "Garnish with fruit slices",
    ],
  },
];

// Helper function to get beverages by group
export function getBeveragesByGroup(groupId: string): Beverage[] {
  // This is a simple mapping - in a real app, you'd have a proper relationship
  const groupBeverageMap: Record<string, string[]> = {
    coffee: ["espresso", "cappuccino", "latte", "americano", "mocha"],
    tea: ["green-tea", "black-tea", "bubble-tea", "herbal-tea"],
    smoothies: [
      "strawberry-smoothie",
      "mango-smoothie",
      "orange-juice",
      "green-smoothie",
      "watermelon-juice",
    ],
    cocktails: ["mojito", "virgin-mojito", "pina-colada", "fruit-punch"],
  };

  const beverageIds = groupBeverageMap[groupId] || [];
  return beverages.filter((beverage) => beverageIds.includes(beverage.id));
}

// Get a beverage by ID
export function getBeverageById(beverageId: string): Beverage | undefined {
  return beverages.find((beverage) => beverage.id === beverageId);
}

// Get the group for a beverage
export function getGroupByBeverageId(beverageId: string): BeverageGroup | undefined {
  const groupBeverageMap: Record<string, string[]> = {
    coffee: ["espresso", "cappuccino", "latte", "americano", "mocha"],
    tea: ["green-tea", "black-tea", "bubble-tea", "herbal-tea"],
    smoothies: [
      "strawberry-smoothie",
      "mango-smoothie",
      "orange-juice",
      "green-smoothie",
      "watermelon-juice",
    ],
    cocktails: ["mojito", "virgin-mojito", "pina-colada", "fruit-punch"],
  };

  for (const [groupId, beverageIds] of Object.entries(groupBeverageMap)) {
    if (beverageIds.includes(beverageId)) {
      return beverageGroups.find((group) => group.id === groupId);
    }
  }
  return undefined;
}
