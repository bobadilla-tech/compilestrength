"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { UnitSystem } from "@/types/unit-system";
import {
	DIET_TYPE_OPTIONS,
	type DietType,
	GOAL_OPTIONS,
	type Goal,
	type MacroResult,
} from "./config";
import { calculateMacroResults } from "./logic";
import { macroInputSchema } from "./validation";

export default function MacroCalculator() {
	const [unit, setUnit] = useState<UnitSystem>("imperial");
	const [tdee, setTdee] = useState("");
	const [goal, setGoal] = useState<Goal>("maintenance");
	const [dietType, setDietType] = useState<DietType>("balanced");
	const [results, setResults] = useState<MacroResult | null>(null);

	const calculate = () => {
		// Validate inputs using Zod schema
		const result = macroInputSchema.safeParse({
			tdee,
			goal,
			dietType,
			unit,
		});

		if (!result.success) {
			return toast.error(
				`${result.error.issues.map((issue) => issue.message).join(". ")}.`,
			);
		}

		// Calculate macros using pure logic function
		const calculationResult = calculateMacroResults({
			tdee: result.data.tdee,
			goal: result.data.goal,
			dietType: result.data.dietType,
			unit: result.data.unit,
		});

		setResults(calculationResult);
	};

	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-100">
			<Navbar />

			{/* Main Content */}
			<main className="max-w-3xl mx-auto px-6 py-12">
				<div className="mb-8">
					<Link
						href="/tools"
						className="text-sm text-zinc-400 hover:text-blue-500 mb-4 inline-block"
					>
						← Back to Tools
					</Link>
					<h1 className="text-4xl font-bold mb-4">Macro Calculator</h1>
					<p className="text-zinc-400">
						Calculate your daily macronutrient targets based on your TDEE and
						fitness goals
					</p>
				</div>

				<div className="border border-zinc-800 p-8 rounded-xl bg-zinc-900/50 space-y-6">
					{/* Unit Toggle */}
					<div className="flex gap-4">
						<Button
							variant={unit === "imperial" ? "default" : "outline"}
							onClick={() => setUnit("imperial")}
						>
							Pounds (lbs)
						</Button>
						<Button
							variant={unit === "metric" ? "default" : "outline"}
							onClick={() => setUnit("metric")}
						>
							Kilograms (kg)
						</Button>
					</div>

					{/* TDEE Input */}
					<div>
						<Label htmlFor="tdee">TDEE (calories/day)</Label>
						<Input
							id="tdee"
							type="number"
							value={tdee}
							onChange={(e) => setTdee(e.target.value)}
							placeholder="e.g., 2500"
							min="800"
							max="6000"
							className="mt-1"
						/>
						<p className="text-xs text-zinc-500 mt-1">
							Use the{" "}
							<Link
								href="/tools/tdee-calculator"
								className="text-blue-500 hover:underline"
							>
								TDEE Calculator
							</Link>{" "}
							if you don&apos;t know your TDEE
						</p>
					</div>

					{/* Goal Selection */}
					<div>
						<Label htmlFor="goal">Goal</Label>
						<select
							id="goal"
							value={goal}
							onChange={(e) => setGoal(e.target.value as Goal)}
							className="mt-1 w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
						>
							{GOAL_OPTIONS.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<p className="text-xs text-zinc-500 mt-1">
							{goal === "cutting" &&
								"20% calorie deficit for fat loss (aggressive but sustainable)"}
							{goal === "maintenance" &&
								"Maintain current weight and body composition"}
							{goal === "bulking" &&
								"15% calorie surplus for muscle gain (lean bulk)"}
						</p>
					</div>

					{/* Diet Type Selection */}
					<div>
						<Label htmlFor="dietType">Diet Type</Label>
						<select
							id="dietType"
							value={dietType}
							onChange={(e) => setDietType(e.target.value as DietType)}
							className="mt-1 w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
						>
							{DIET_TYPE_OPTIONS.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<p className="text-xs text-zinc-500 mt-1">
							{dietType === "balanced" &&
								"Standard macro split suitable for most people"}
							{dietType === "low-carb" &&
								"Reduced carbs, higher fat for better satiety"}
							{dietType === "keto" && "Very low carb, high fat ketogenic diet"}
							{dietType === "high-protein" &&
								"Increased protein for muscle building and satiety"}
						</p>
					</div>

					<Button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							calculate();
						}}
						className="w-full"
						size="lg"
					>
						Calculate Macros
					</Button>

					{/* Results */}
					{results && (
						<div className="mt-8 pt-8 border-t border-zinc-800">
							<h2 className="text-2xl font-bold mb-4">Your Daily Targets</h2>

							{/* Target Calories */}
							<div className="mb-6 p-4 bg-blue-900/20 border border-blue-800/50 rounded-lg">
								<div className="text-sm text-blue-400 mb-1">
									Target Daily Calories
								</div>
								<div className="text-3xl font-bold text-blue-500">
									{results.targetCalories} cal
								</div>
								<div className="text-xs text-blue-300">
									{results.goal === "cutting" && "20% deficit for fat loss"}
									{results.goal === "maintenance" &&
										"Maintenance for current weight"}
									{results.goal === "bulking" && "15% surplus for muscle gain"}
								</div>
							</div>

							{/* Macronutrient Breakdown */}
							<div className="grid md:grid-cols-3 gap-4 mb-6">
								{/* Protein */}
								<div className="p-4 bg-red-900/20 border border-red-800/50 rounded-lg">
									<div className="text-sm text-red-400 mb-1">Protein</div>
									<div className="text-2xl font-bold text-red-400">
										{results.protein.grams}g
									</div>
									<div className="text-xs text-red-300">
										{results.protein.calories} cal ({results.protein.percentage}
										%)
									</div>
								</div>

								{/* Carbs */}
								<div className="p-4 bg-green-900/20 border border-green-800/50 rounded-lg">
									<div className="text-sm text-green-400 mb-1">
										Carbohydrates
									</div>
									<div className="text-2xl font-bold text-green-400">
										{results.carbs.grams}g
									</div>
									<div className="text-xs text-green-300">
										{results.carbs.calories} cal ({results.carbs.percentage}%)
									</div>
								</div>

								{/* Fat */}
								<div className="p-4 bg-yellow-900/20 border border-yellow-800/50 rounded-lg">
									<div className="text-sm text-yellow-400 mb-1">Fat</div>
									<div className="text-2xl font-bold text-yellow-400">
										{results.fat.grams}g
									</div>
									<div className="text-xs text-yellow-300">
										{results.fat.calories} cal ({results.fat.percentage}%)
									</div>
								</div>
							</div>

							{/* Summary Card */}
							<div className="p-4 bg-zinc-800/50 rounded-lg">
								<h3 className="font-bold mb-2">Daily Summary</h3>
								<p className="text-sm text-zinc-400">
									Eat {results.targetCalories} calories per day with{" "}
									{results.protein.grams}g protein, {results.carbs.grams}g
									carbs, and {results.fat.grams}g fat to support your{" "}
									{results.goal === "cutting" && "fat loss"}
									{results.goal === "maintenance" && "maintenance"}
									{results.goal === "bulking" && "muscle gain"} goals on a{" "}
									{results.dietType === "balanced" && "balanced"}
									{results.dietType === "low-carb" && "low carb"}
									{results.dietType === "keto" && "ketogenic"}
									{results.dietType === "high-protein" && "high protein"} diet.
								</p>
							</div>

							<div className="mt-4 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg text-sm text-zinc-400">
								<p className="font-bold text-blue-500 mb-1">
									Remember: These are starting points
								</p>
								<p>
									Track your progress and adjust as needed. Individual
									metabolism, activity levels, and food quality all affect
									results. Consistency matters more than perfection.
								</p>
							</div>
						</div>
					)}
				</div>

				{/* Info Section */}
				<div className="mt-8 space-y-4 text-sm text-zinc-400">
					<div>
						<h3 className="text-lg font-bold mb-2 text-blue-500">
							What are Macronutrients?
						</h3>
						<p>
							Macronutrients (macros) are the three main nutrients your body
							needs: protein, carbohydrates, and fat. Each provides calories and
							serves different functions in your body. Protein builds and
							repairs muscle (4 cal/g), carbs provide energy (4 cal/g), and fat
							supports hormones and absorption (9 cal/g).
						</p>
					</div>
					<div>
						<h3 className="text-lg font-bold mb-2 text-blue-500">
							How to Track Macros
						</h3>
						<p>
							Use a food tracking app like MyFitnessPal or Cronometer to log
							your daily intake. Weigh your food for accuracy, especially in the
							beginning. Focus on hitting your protein target first, then fill
							in carbs and fats around your calorie goal.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-bold mb-2 text-blue-500">
							Which Diet Type Should I Choose?
						</h3>
						<p>
							<strong>Balanced:</strong> Good starting point for most people.{" "}
							<strong>Low Carb:</strong> Better for those who feel more
							satisfied with higher fat. <strong>Keto:</strong> Only if
							you&apos;re committed to very low carb intake (under 25g/day).{" "}
							<strong>High Protein:</strong> Ideal for aggressive fat loss or
							muscle building phases.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
