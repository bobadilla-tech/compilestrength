import { fileURLToPath } from "node:url";
import createJiti from "jiti";
import type { NextConfig } from "next";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env");

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.gravatar.com",
				pathname: "/avatar/**",
			},
		],
	},
	turbopack: {},
	webpack: (config, { isServer }) => {
		if (isServer) {
			// Exclude @vercel/og (next/og ImageResponse) from the Worker bundle.
			// We don't use ImageResponse, and the wasm files add ~2.2 MB uncompressed.
			config.resolve.alias = {
				...config.resolve.alias,
				"next/dist/compiled/@vercel/og": false,
			};
		}
		return config;
	},
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();
