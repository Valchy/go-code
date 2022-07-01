import type { NextApiRequest, NextApiResponse } from 'next';
import passport from '@lib/passport-google-auth';
import nextConnect from 'next-connect';

export default nextConnect<NextApiRequest, NextApiResponse>()
	.use(passport.initialize())
	.get(
		passport.authenticate('google', {
			failureRedirect: '/sign-in',
			scope: ['profile', 'email']
		})
	);
