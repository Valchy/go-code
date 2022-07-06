import type { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log('\n\n\n', req.method);

	passport.authenticate('google', (err, user, info) => {
		if (err || !user) {
			console.log(err);
			return res.redirect('/sign-in');
		}

		const jwtCookie = jwt.sign({ name: `${user.given_name} ${user.family_name}`, email: user.email }, process.env.JWT_SECRET as string);
		setCookie('jwt', jwtCookie, { req, res });
		res.redirect('/snippets/my');
	})(req, res);
}
