import type { NextApiRequest, NextApiResponse } from 'next';
import passport from '@lib/passport-google-auth';
import nextConnect from 'next-connect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	passport.authenticate('google', {
		scope: ['profile', 'email'],
		session: false
	})(req, res);
}
