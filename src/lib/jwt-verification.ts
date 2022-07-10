import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { getCookie, deleteCookie } from 'cookies-next';
import User from '@models/User';

type UserObject = {
	name: string;
	email: string;
};

export default function jwtVerify(req: NextApiRequest, res: NextApiResponse): Promise<UserObject> {
	return new Promise(resolve => {
		const jwtCookie = getCookie('jwt', { req });

		jwt.verify(jwtCookie as string, process.env.JWT_SECRET as string, async (err, decoded) => {
			if (typeof decoded === 'object' && !err) {
				User.findOne({ email: decoded.email }).exec((err, user) => {
					if (err || !user) {
						// Remove old jwt cookie
						deleteCookie('jwt', { req, res });
						res.redirect('/sign-in');
					} else {
						resolve({
							name: decoded.name as string,
							email: decoded.email as string
						});
					}
				});
			} else res.redirect('/sign-in');
		});
	});
}
