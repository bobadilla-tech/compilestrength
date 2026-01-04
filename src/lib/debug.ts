/**
 * Debug utility for conditional logging in development mode
 * Logs are only shown when NODE_ENV is 'development' or 'test'
 */

import { env } from "@/env";

const isDevelopment = env.NODE_ENV === "development" || env.NODE_ENV === "test";

/**
 * Development-only debug logging
 */
export const debug = {
	log: (...args: unknown[]) => {
		if (isDevelopment) {
			console.log(...args);
		}
	},
	info: (...args: unknown[]) => {
		if (isDevelopment) {
			console.info(...args);
		}
	},
};

/**
 * Production logging for errors and warnings
 */
export const logger = {
	error: (...args: unknown[]) => {
		console.error(...args);
	},
	warn: (...args: unknown[]) => {
		console.warn(...args);
	},
};
