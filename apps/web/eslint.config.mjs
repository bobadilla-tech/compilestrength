import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
	...nextCoreWebVitals,
	...nextTypescript,
	{
		ignores: [
			"node_modules/**",
			".next/**",
			".open-next/**",
			".wrangler/**",
			"coverage/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
		],
	},
	{
		// Biome owns formatting/style. These are tracked as warnings until the
		// existing code is cleaned up (see .artifacts for the follow-up).
		rules: {
			"react/no-unescaped-entities": "off",
			"@typescript-eslint/no-explicit-any": "warn",
			"react-hooks/purity": "warn",
			"react-hooks/refs": "warn",
			"react-hooks/set-state-in-effect": "warn",
		},
	},
];

export default eslintConfig;
