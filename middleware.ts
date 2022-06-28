// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
	console.log(req.url);
	// return NextResponse.redirect(new URL('/snippets/my', req.url));
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/snippets/:path*'
};
