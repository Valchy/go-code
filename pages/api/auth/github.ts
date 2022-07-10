import type { NextApiRequest, NextApiResponse } from 'next';
import passport from '@lib/passport-github-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	passport.authenticate('github', { scope: ['user:email'] })(req, res);
}
