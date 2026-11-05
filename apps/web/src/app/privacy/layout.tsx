import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | CompileStrength",
	description:
		"CompileStrength privacy policy. Learn how we collect, use, and protect your personal information and workout data.",
	keywords: [
		"privacy policy",
		"data protection",
		"user privacy",
		"CompileStrength privacy",
		"workout data privacy",
	],
	authors: [{ name: "CompileStrength" }],
	creator: "CompileStrength",
	publisher: "CompileStrength",
	alternates: {
		canonical: "https://compilestrength.com/privacy",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://compilestrength.com/privacy",
		siteName: "CompileStrength",
		title: "Privacy Policy | CompileStrength",
		description:
			"CompileStrength privacy policy. Learn how we collect, use, and protect your personal information and workout data.",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "CompileStrength Privacy Policy",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Privacy Policy | CompileStrength",
		description:
			"CompileStrength privacy policy. Learn how we collect, use, and protect your personal information and workout data.",
		images: ["/logo.png"],
		creator: "@ultirequiem",
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
};

export default function PrivacyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
