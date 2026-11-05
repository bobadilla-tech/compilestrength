import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export class AuthenticationError extends Error {
	constructor(message = "Unauthorized") {
		super(message);
		this.name = "AuthenticationError";
	}
}

export async function getAuthenticatedUserId(): Promise<string> {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		});

		if (!session?.user?.id) {
			throw new AuthenticationError();
		}

		return session.user.id;
	} catch (error) {
		if (error instanceof AuthenticationError) {
			throw error;
		}

		console.error("Authentication error:", error);
		throw new AuthenticationError("Authentication failed");
	}
}

export function createUnauthorizedResponse(message = "Unauthorized") {
	return NextResponse.json({ error: message }, { status: 401 });
}
