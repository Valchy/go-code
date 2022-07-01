import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const jwtCookie = jwt.sign({ foo: 'bar' }, process.env.JWT_SECRET as string);
	// console.log(jwtCookie);
	setCookie('jwt', jwtCookie, { req, res });

	res.status(302).redirect('/');
}
