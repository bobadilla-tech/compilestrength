import type { UnitSystem } from "@/types/unit-system";

// Calorie adjustment multipliers based on goal
export const GOAL_MULTIPLIERS = {
	cutting: 0.8, // 20% deficit
	maintenance: 1.0, // No change
	bulking: 1.15, // 15% surplus (midpoint of 10-20%)
} as const;

export type Goal = keyof typeof GOAL_MULTIPLIERS;

// Macro distribution percentages for each diet type
export const DIET_TYPE_MACROS = {
	balanced: {
		protein: 0.3, // 30%
		carbs: 0.4, // 40%
		fat: 0.3, // 30%
	},
	"low-carb": {
		protein: 0.35, // 35%
		carbs: 0.25, // 25%
		fat: 0.4, // 40%
	},
	keto: {
		protein: 0.25, // 25%
		carbs: 0.05, // 5%
		fat: 0.7, // 70%
	},
	"high-protein": {
		protein: 0.4, // 40%
		carbs: 0.35, // 35%
		fat: 0.25, // 25%
	},
} as const;

export type DietType = keyof typeof DIET_TYPE_MACROS;

// Calories per gram of each macronutrient
export const CALORIES_PER_GRAM = {
	protein: 4,
	carbs: 4,
	fat: 9,
} as const;

// Goal options for UI
export const GOAL_OPTIONS: Array<{ value: Goal; label: string }> = [
	{ value: "cutting", label: "Cutting (Fat Loss)" },
	{ value: "maintenance", label: "Maintenance" },
	{ value: "bulking", label: "Bulking (Muscle Gain)" },
];

// Diet type options for UI
export const DIET_TYPE_OPTIONS: Array<{ value: DietType; label: string }> = [
	{ value: "balanced", label: "Balanced (30/40/30)" },
	{ value: "low-carb", label: "Low Carb (35/25/40)" },
	{ value: "keto", label: "Keto (25/5/70)" },
	{ value: "high-protein", label: "High Protein (40/35/25)" },
];

// Input interfaces
export interface MacroInputs {
	tdee: number;
	goal: Goal;
	dietType: DietType;
	unit: UnitSystem;
}

// Result interface
export interface MacroResult {
	targetCalories: number;
	protein: {
		grams: number;
		calories: number;
		percentage: number;
	};
	carbs: {
		grams: number;
		calories: number;
		percentage: number;
	};
	fat: {
		grams: number;
		calories: number;
		percentage: number;
	};
	goal: Goal;
	dietType: DietType;
}
