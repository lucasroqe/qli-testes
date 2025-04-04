import { getSessionCookie, getCookieCache } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request); 
	const s = getCookieCache(request)
	s?.session

    if (!sessionCookie) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/*"],
};