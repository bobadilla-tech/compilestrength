import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service | CompileStrength",
	description:
		"CompileStrength terms of service. Review our usage terms, subscription policies, and legal agreements for using our AI workout programming platform.",
	keywords: [
		"terms of service",
		"terms and conditions",
		"user agreement",
		"CompileStrength terms",
		"legal terms",
	],
	authors: [{ name: "CompileStrength" }],
	creator: "CompileStrength",
	publisher: "CompileStrength",
	alternates: {
		canonical: "https://compilestrength.com/terms",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://compilestrength.com/terms",
		siteName: "CompileStrength",
		title: "Terms of Service | CompileStrength",
		description:
			"CompileStrength terms of service. Review our usage terms, subscription policies, and legal agreements for using our AI workout programming platform.",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "CompileStrength Terms of Service",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Terms of Service | CompileStrength",
		description:
			"CompileStrength terms of service. Review our usage terms, subscription policies, and legal agreements.",
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

export default function TermsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
