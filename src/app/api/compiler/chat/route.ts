import { google } from "@ai-sdk/google";
import {
	convertToModelMessages,
	stepCountIs,
	streamText,
	type UIMessage,
} from "ai";
import {
	BODYBUILDING_SYSTEM_PROMPT,
	bodybuildingTools,
} from "@/agents/bodybuilding";
import {
	AuthenticationError,
	createUnauthorizedResponse,
	getAuthenticatedUserId,
} from "@/lib/auth-middleware";

export const maxDuration = 60;

function getErrorMessage(error: unknown): string {
	if (error instanceof Error) {
		return error.message;
	}

	if (typeof error === "string") {
		return error;
	}

	try {
		return JSON.stringify(error);
	} catch {
		return "Unknown error";
	}
}

export async function POST(req: Request) {
	try {
		await getAuthenticatedUserId();

		const modelName =
			process.env.GOOGLE_GENERATIVE_AI_MODEL?.trim() || "gemini-flash-latest";

		if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY?.trim()) {
			console.error(
				"Compiler chat error: Missing GOOGLE_GENERATIVE_AI_API_KEY",
			);
			return new Response(
				"AI provider is not configured. Set GOOGLE_GENERATIVE_AI_API_KEY and restart the dev server.",
				{ status: 500 },
			);
		}

		const {
			messages,
			agentType = "bodybuilding",
		}: {
			messages: UIMessage[];
			agentType?: string;
		} = await req.json();

		if (agentType !== "bodybuilding") {
			return new Response("Agent not available yet", { status: 400 });
		}

		const result = streamText({
			model: google(modelName),
			system: BODYBUILDING_SYSTEM_PROMPT,
			messages: convertToModelMessages(messages),
			tools: bodybuildingTools,
			stopWhen: stepCountIs(10),
			onStepFinish({ text, toolCalls, toolResults }) {
				console.log("Step finished:", {
					text: `${text.substring(0, 100)}...`,
					toolCallsCount: toolCalls.length,
					toolResultsCount: toolResults.length,
				});
			},
			temperature: 0.7,
		});

		return result.toUIMessageStreamResponse({
			onError(error) {
				const message = getErrorMessage(error);
				console.error("Compiler chat error:", message, error);

				if (process.env.NODE_ENV === "development") {
					return `Workout generation failed: ${message}`;
				}

				return "I encountered an issue while generating your workout. Please try again or provide more specific information about your goals.";
			},
		});
	} catch (error) {
		if (error instanceof AuthenticationError) {
			return createUnauthorizedResponse();
		}

		console.error("Compiler API error:", error);
		return new Response("Internal server error", { status: 500 });
	}
}
