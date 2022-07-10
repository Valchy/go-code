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

		// Remove old jwt cookie and redirect to login
		const resetLogin = () => {
			deleteCookie('jwt', { req, res });
			res.status(302).redirect('/sign-in');
		};

		// Verify integrity of jwt token
		jwt.verify(jwtCookie as string, process.env.JWT_SECRET as string, async (err, decoded) => {
			if (typeof decoded === 'object' && !err) {
				User.findOne({ email: decoded.email }).exec((err, user) => {
					if (err || !user) resetLogin();
					else {
						resolve({
							name: decoded.name as string,
							email: decoded.email as string
						});
					}
				});
			} else resetLogin();
		});
	});
}
