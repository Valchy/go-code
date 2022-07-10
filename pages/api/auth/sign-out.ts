import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from 'cookies-next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// Remove jwt cookie to sign out
	deleteCookie('jwt', { req, res });
	res.status(302).redirect('/');
}
