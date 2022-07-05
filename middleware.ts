import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
	const jwtCookie = req.cookies.get('jwt');

	if (req.nextUrl.pathname.startsWith('/snippets') && !jwtCookie) {
		return NextResponse.redirect(new URL('/sign-in', req.url));
	}
}
