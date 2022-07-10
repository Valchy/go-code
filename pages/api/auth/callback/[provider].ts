import type { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	passport.authenticate(req.query.provider as string, { failureRedirect: '/sign-in' }, (err, user, info) => {
		if (err) {
			return res.redirect('/sign-in');
		}

		// Set JWT authentication token in cookie
		const jwtCookie = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET as string);
		setCookie('jwt', jwtCookie, { req, res });

		// Redirect to user snippets (protected page)
		return res.redirect('/snippets/my');
	})(req, res);
}
