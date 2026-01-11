import type { Goal, MacroInputs, MacroResult } from "./config";
import {
	CALORIES_PER_GRAM,
	DIET_TYPE_MACROS,
	GOAL_MULTIPLIERS,
} from "./config";

/**
 * Calculates target calories based on TDEE and goal.
 *
 * @param tdee - Total Daily Energy Expenditure in calories
 * @param goal - Fitness goal: cutting, maintenance, or bulking
 * @returns Target daily calories adjusted for goal
 */
export function calculateTargetCalories(tdee: number, goal: Goal): number {
	const multiplier = GOAL_MULTIPLIERS[goal];
	return Math.round(tdee * multiplier);
}

/**
 * Calculates grams of protein needed based on calories and percentage.
 *
 * @param targetCalories - Total daily calorie target
 * @param proteinPercentage - Percentage of calories from protein (0-1)
 * @returns Grams of protein per day
 */
export function calculateProteinGrams(
	targetCalories: number,
	proteinPercentage: number,
): number {
	const proteinCalories = targetCalories * proteinPercentage;
	return Math.round(proteinCalories / CALORIES_PER_GRAM.protein);
}

/**
 * Calculates grams of carbohydrates needed based on calories and percentage.
 *
 * @param targetCalories - Total daily calorie target
 * @param carbPercentage - Percentage of calories from carbs (0-1)
 * @returns Grams of carbohydrates per day
 */
export function calculateCarbGrams(
	targetCalories: number,
	carbPercentage: number,
): number {
	const carbCalories = targetCalories * carbPercentage;
	return Math.round(carbCalories / CALORIES_PER_GRAM.carbs);
}

/**
 * Calculates grams of fat needed based on calories and percentage.
 *
 * @param targetCalories - Total daily calorie target
 * @param fatPercentage - Percentage of calories from fat (0-1)
 * @returns Grams of fat per day
 */
export function calculateFatGrams(
	targetCalories: number,
	fatPercentage: number,
): number {
	const fatCalories = targetCalories * fatPercentage;
	return Math.round(fatCalories / CALORIES_PER_GRAM.fat);
}

/**
 * Main macro calculation function that orchestrates all calculations.
 *
 * This function:
 * 1. Calculates target calories based on TDEE and goal
 * 2. Gets macro percentages based on diet type
 * 3. Calculates grams of each macronutrient
 * 4. Calculates calories from each macronutrient
 * 5. Returns comprehensive macro breakdown
 *
 * @param inputs - Macro calculation inputs (TDEE, goal, diet type)
 * @returns Complete macro breakdown with calories and grams
 */
export function calculateMacroResults(inputs: MacroInputs): MacroResult {
	const { tdee, goal, dietType } = inputs;

	// Get target calories based on goal
	const targetCalories = calculateTargetCalories(tdee, goal);

	// Get macro percentages for selected diet type
	const macroPercentages = DIET_TYPE_MACROS[dietType];

	// Calculate grams for each macronutrient
	const proteinGrams = calculateProteinGrams(
		targetCalories,
		macroPercentages.protein,
	);
	const carbGrams = calculateCarbGrams(targetCalories, macroPercentages.carbs);
	const fatGrams = calculateFatGrams(targetCalories, macroPercentages.fat);

	// Calculate calories from each macronutrient
	const proteinCalories = proteinGrams * CALORIES_PER_GRAM.protein;
	const carbCalories = carbGrams * CALORIES_PER_GRAM.carbs;
	const fatCalories = fatGrams * CALORIES_PER_GRAM.fat;

	return {
		targetCalories,
		protein: {
			grams: proteinGrams,
			calories: proteinCalories,
			percentage: Math.round(macroPercentages.protein * 100),
		},
		carbs: {
			grams: carbGrams,
			calories: carbCalories,
			percentage: Math.round(macroPercentages.carbs * 100),
		},
		fat: {
			grams: fatGrams,
			calories: fatCalories,
			percentage: Math.round(macroPercentages.fat * 100),
		},
		goal,
		dietType,
	};
}
