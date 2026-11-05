import {
	AuthenticationError,
	createUnauthorizedResponse,
	getAuthenticatedUserId,
} from "@/lib/auth-middleware";
import { getRoutinesByUserId } from "@/lib/queries";

export async function GET() {
	try {
		const userId = await getAuthenticatedUserId();
		const routinesWithDetails = await getRoutinesByUserId(userId);

		return Response.json({
			success: true,
			routines: routinesWithDetails,
		});
	} catch (error) {
		if (error instanceof AuthenticationError) {
			return createUnauthorizedResponse();
		}

		console.error("Get routines API error:", error);
		return new Response("Failed to fetch workout routines", { status: 500 });
	}
}
