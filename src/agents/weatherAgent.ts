import { google } from "@ai-sdk/google";
import { Experimental_Agent as Agent, stepCountIs, tool } from "ai";
import { z } from "zod";

const modelName =
	process.env.GOOGLE_GENERATIVE_AI_MODEL?.trim() || "gemini-flash-latest";

export const weatherAgent = new Agent({
	model: google(modelName),
	tools: {
		weather: tool({
			description: "Get the weather in a location (in Fahrenheit)",
			inputSchema: z.object({
				location: z.string().describe("The location to get the weather for"),
			}),
			execute: async ({ location }) => ({
				location,
				temperature: 72 + Math.floor(Math.random() * 21) - 10,
			}),
		}),
		convertFahrenheitToCelsius: tool({
			description: "Convert temperature from Fahrenheit to Celsius",
			inputSchema: z.object({
				temperature: z.number().describe("Temperature in Fahrenheit"),
			}),
			execute: async ({ temperature }) => {
				const celsius = Math.round((temperature - 32) * (5 / 9));
				return { celsius };
			},
		}),
	},
	stopWhen: stepCountIs(20),
});
