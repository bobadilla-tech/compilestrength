/**
 * Debug utility for conditional logging in development mode
 * Logs are only shown when NODE_ENV is 'development' or 'test'
 *
 * Note: We use process.env.NODE_ENV directly instead of @/env because NODE_ENV
 * is declared in the `server` block of createEnv() — accessing it on the client
 * would throw "@t3-oss/env-nextjs: Attempted to access a server-side environment
 * variable on the client". process.env.NODE_ENV is safe because Next.js inlines
 * it at build time for both server and client bundles.
 */

const nodeEnv = process.env.NODE_ENV;
const isDevelopment = nodeEnv === "development" || nodeEnv === "test";

/**
 * Development-only debug logging
 */
export const debug = {
	log: (...args: unknown[]) => {
		if (isDevelopment) {
			console.log("[DEBUG]", ...args);
		}
	},
	info: (...args: unknown[]) => {
		if (isDevelopment) {
			console.info("[INFO]", ...args);
		}
	},
};

/**
 * Production logging for errors and warnings
 */
export const logger = {
	error: (...args: unknown[]) => {
		console.error("[ERROR]", ...args);
	},
	warn: (...args: unknown[]) => {
		console.warn("[WARN]", ...args);
	},
};
