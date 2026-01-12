import { z } from "zod";
import { DIET_TYPE_MACROS, GOAL_MULTIPLIERS } from "./config";

// Validation schema for macro calculator inputs
export const macroInputSchema = z.object({
	tdee: z
		.string()
		.trim()
		.min(1, "TDEE is required")
		.transform((val) => Number.parseFloat(val))
		.pipe(
			z
				.number()
				.positive("TDEE must be positive")
				.min(800, "TDEE must be at least 800 calories")
				.max(6000, "TDEE must be 6000 calories or less"),
		),
	goal: z
		.enum(Object.keys(GOAL_MULTIPLIERS) as [string, ...string[]])
		.transform((val) => val as keyof typeof GOAL_MULTIPLIERS),
	dietType: z
		.enum(Object.keys(DIET_TYPE_MACROS) as [string, ...string[]])
		.transform((val) => val as keyof typeof DIET_TYPE_MACROS),
	unit: z.enum(["metric", "imperial"]),
});

export type MacroInput = z.infer<typeof macroInputSchema>;
