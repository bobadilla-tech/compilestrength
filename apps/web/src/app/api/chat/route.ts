import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
	try {
		const { messages }: { messages: UIMessage[] } = await req.json();
		const modelName =
			process.env.GOOGLE_GENERATIVE_AI_MODEL?.trim() || "gemini-flash-latest";

		const result = streamText({
			model: google(modelName),
			system: "You are a helpful assistant.",
			messages: await convertToModelMessages(messages),
		});

		return result.toUIMessageStreamResponse();
	} catch (error) {
		console.error("Chat API error:", error);
		return new Response("Internal server error", { status: 500 });
	}
}
