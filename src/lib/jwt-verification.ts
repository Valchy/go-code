import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { getCookie } from 'cookies-next';

type UserObject = {
	name: string;
	email: string;
};

export default function jwtVerify(req: NextApiRequest, res: NextApiResponse): Promise<UserObject> {
	return new Promise(resolve => {
		const jwtCookie = getCookie('jwt', { req });

		jwt.verify(jwtCookie as string, process.env.JWT_SECRET as string, (err, decoded) => {
			if (typeof decoded === 'object' && !err) {
				resolve({
					name: decoded.name as string,
					email: decoded.email as string
				});
			} else res.redirect('/sign-in');
		});
	});
}
