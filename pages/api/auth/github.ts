import type { NextApiRequest, NextApiResponse } from 'next';
import passport from '@lib/passport-github-auth';
import nextConnect from 'next-connect';

export default nextConnect<NextApiRequest, NextApiResponse>()
	.use(passport.initialize())
	.get(
		passport.authenticate('github', {
			failureRedirect: '/sign-in'
		})
	);
