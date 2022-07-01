import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const jwtCookie = jwt.sign({ name: 'Valeri Sabev', email: 'contact@valerisabev.com' }, process.env.JWT_SECRET as string);
	// setCookie('jwt', jwtCookie, { req, res });

	console.log(req.query);

	res.status(302).redirect('/');
}
