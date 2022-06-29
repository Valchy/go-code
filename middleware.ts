// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
	if (req.nextUrl.pathname.startsWith('/snippets/my')) {
		console.log('Check if authenticated');
	}
}
