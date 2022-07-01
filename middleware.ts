// middleware.ts
import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
	let res = NextResponse.next();
	let cookie = req.cookies.get('jwt');

	console.log(cookie);

	// const jwtCookie = getCookie('jwt', { req });
	if (req.nextUrl.pathname.startsWith('/snippets/my')) {
		console.log('Check if authenticated');
	}
}
