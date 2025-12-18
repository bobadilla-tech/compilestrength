import type React from "react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://compilestrength.com"),
	title: {
		default:
			"CompileStrength - AI-Powered Workout Programming for Engineers & Developers",
		template: "%s | CompileStrength",
	},
	description:
		"Science-based AI workout programming for engineers, developers, and tech professionals. Get personalized training plans based on your data, goals, and constraints. Debug your gains like you debug code.",
	keywords: [
		"AI workout programming",
		"workout app for engineers",
		"fitness for developers",
		"science-based training",
		"personalized workout plans",
		"AI fitness coach",
		"workout programming for programmers",
		"tech professional fitness",
		"data-driven training",
		"workout tracker for nerds",
		"powerlifting app",
		"bodybuilding AI coach",
		"fitness for software engineers",
	],
	authors: [{ name: "Eliaz Bobadilla" }],
	creator: "Eliaz Bobadilla",
	publisher: "CompileStrength",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://compilestrength.com",
		title: "CompileStrength - AI-Powered Workout Programming for Engineers",
		description:
			"Science-based AI workout programming for engineers and developers. Get personalized training plans based on your data, goals, and constraints.",
		siteName: "CompileStrength",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "CompileStrength - AI-Powered Workout Programming",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CompileStrength - AI-Powered Workout Programming for Engineers",
		description:
			"Science-based AI workout programming for engineers. Debug your gains like you debug code.",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	alternates: {
		canonical: "https://compilestrength.com",
	},
	category: "fitness",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "CompileStrength",
		applicationCategory: "HealthApplication",
		applicationSubCategory: "Fitness",
		description:
			"AI-powered workout programming for engineers, developers, and tech professionals. Science-based personalized training plans.",
		url: "https://compilestrength.com",
		operatingSystem: "Web Browser",
		offers: [
			{
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
				name: "Free Plan",
				description:
					"One program generation, basic workout tracking, progress dashboard",
			},
			{
				"@type": "Offer",
				price: "9.99",
				priceCurrency: "USD",
				name: "Pro Plan",
				description:
					"Unlimited program generation, Gains Debugger, All AI coaches, Advanced analytics",
			},
			{
				"@type": "Offer",
				price: "29.99",
				priceCurrency: "USD",
				name: "Premium Plan",
				description:
					"Real-time AI coaching, Priority support, Custom coach training, API access",
			},
		],
		creator: {
			"@type": "Person",
			name: "Eliaz Bobadilla",
		},
		audience: {
			"@type": "PeopleAudience",
			audienceType: "Engineers, Developers, Tech Professionals",
		},
		featureList: [
			"AI-powered workout programming",
			"Personalized training plans",
			"Workout tracking and progress monitoring",
			"Gains Debugger for plateau analysis",
			"Multiple AI coaching personas",
			"Version control for workouts (GitGains)",
			"Science-based programming",
		],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			ratingCount: "150",
			bestRating: "5",
		},
	};

	const organizationLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "CompileStrength",
		url: "https://compilestrength.com",
		logo: "https://compilestrength.com/icon.svg",
		description: "AI-powered fitness platform for engineers and developers",
		sameAs: [
			"https://github.com/bobadilla-tech",
			"https://www.linkedin.com/company/compilestrength",
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "Customer Support",
			email: "eliaz@bobadilla.tech",
		},
	};

	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
				/>
			</head>
			<body className={`font-sans antialiased`}>{children}</body>
		</html>
	);
}
