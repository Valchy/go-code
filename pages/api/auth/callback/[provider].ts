import type { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.query);
	passport.authenticate(['google', 'github'], { failureRedirect: '/sign-in' }, (user, info) => {
		// Set JWT authentication token in cookie
		const jwtCookie = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET as string);
		setCookie('jwt', jwtCookie, { req, res });

		// Redirect to user snippets (protected page)
		res.redirect('/snippets/my');
	})(req, res);
}
