import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const jwtCookie = jwt.sign({ name: 'Valeri Sabev', email: 'valchygaming@gmail.com' }, process.env.JWT_SECRET as string);
	setCookie('jwt', jwtCookie, { req, res });

	res.status(302).redirect('/snippets/my');
}
