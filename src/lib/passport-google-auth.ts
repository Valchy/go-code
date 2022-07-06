// import passport from 'passport';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
// import jwt from 'jsonwebtoken';

// import connectMongo from '@utils/mongoose';
// import User from '@models/User';

// passport.use(
// 	'google',
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.GOOGLE_CLIENT_ID as string,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
// 			callbackURL: 'http://localhost:3000/api/auth/callback/google'
// 		},
// 		async (accessToken, refreshToken, profile, done) => {
// 			console.log(accessToken, refreshToken, profile);

// 			try {
// 				console.log(profile.email);
// 				done(null, profile);
// 				// const obj = await User.findOne({ email: profile.email });
// 				// if (!obj) {
// 				// 	// create new user
// 				// 	const newUser = new User({
// 				// 		email: profile.email,
// 				// 		name: profile.displayName,
// 				// 		accessToken
// 				// 	});
// 				// 	await newUser.save();
// 				// 	const token = await jwt.sign(
// 				// 		{
// 				// 			id: newUser._id,
// 				// 			created: Date.now().toString()
// 				// 		},
// 				// 		process.env.JWT_SECRET as string
// 				// 	);
// 				// 	newUser.tokens.push(token);
// 				// 	await newUser.save();
// 				// 	done(null, newUser, { message: 'Auth successful', token });
// 				// } else {
// 				// 	// login existing user
// 				// 	const token = await jwt.sign(
// 				// 		{
// 				// 			id: obj._id,
// 				// 			created: Date.now().toString()
// 				// 		},
// 				// 		process.env.JWT_SECRET as string
// 				// 	);
// 				// 	obj.tokens.push(token);
// 				// 	await obj.save();
// 				// 	done(null, obj, { message: 'Auth successful', token });
// 				// }
// 			} catch (err) {
// 				console.error(err);
// 				done(err, false, { message: 'Internal server error' });
// 			}
// 		}
// 	)
// );

// export default passport;

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import User from '@models/User';
import connectMongo from '@utils/mongoose';

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			callbackURL: 'http://localhost:3000/api/auth/callback/google',
			passReqToCallback: true
		},
		async function (request: any, accessToken: any, refreshToken: any, profile: any, done: any) {
			// console.log(profile);
			done(null, profile);
			// await connectMongo();

			// await User.findOrCreate({ name: 'Valeri', email: 'tets@gmail.com' }, function (err, user) {
			// 	return done(err, user);
			// });
		}
	)
);

export default passport;
