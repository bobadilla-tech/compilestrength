import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Macro Calculator | Daily Macronutrient Targets - CompileStrength",
	description:
		"Calculate your daily macronutrient targets (protein, carbs, fat) based on your TDEE and fitness goals. Free tool with multiple diet types including balanced, low carb, keto, and high protein.",
	keywords: [
		"macro calculator",
		"macronutrient calculator",
		"protein calculator",
		"carb calculator",
		"fat calculator",
		"IIFYM calculator",
		"flexible dieting",
		"nutrition calculator",
		"diet planning",
		"cutting macros",
		"bulking macros",
	],
	authors: [{ name: "CompileStrength" }],
	creator: "CompileStrength",
	publisher: "CompileStrength",
	alternates: {
		canonical: "https://compilestrength.com/tools/macro-calculator",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://compilestrength.com/tools/macro-calculator",
		siteName: "CompileStrength",
		title: "Macro Calculator | Daily Macronutrient Targets - CompileStrength",
		description:
			"Calculate your daily macronutrient targets (protein, carbs, fat) based on your TDEE and fitness goals. Free tool with multiple diet types including balanced, low carb, keto, and high protein.",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "CompileStrength Macro Calculator - Daily Macronutrient Targets",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Macro Calculator | Daily Macronutrient Targets",
		description:
			"Calculate your daily macronutrient targets based on your TDEE and fitness goals. Supports multiple diet types.",
		images: ["/logo.png"],
		creator: "@ultirequiem",
	},
};

export default function MacroCalculatorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
