import { Profile, Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import connectMongo from '@utils/mongoose';
import User from '@models/User';

// logic to save your user or check if user exists in your record to proceed.
const saveUser = (user: Profile) => {
	return new Promise((resolve, reject) => {
		console.log(user);
		resolve('Successful');
	});
};

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			callbackURL: '/api/auth/callback/google',
			passReqToCallback: true
		},
		async function (request, accessToken, refreshToken, profile, done) {
			await connectMongo();
			await User.create({ name: 'Valeri', email: 'valchygaming@gmail.com' + Math.random() });
			console.log('IN HERE');
			return done(null, profile);
			// User.findOrCreate({ googleId: profile.id }, function (err, user) {
			// 	return done(err, user);
			// });
		}
		// async (_accessToken, _refreshToken, profile, cb: any) => {
		// await connectMongo();
		// await User.create({ name: 'Valeri', email: 'valchygaming@gmail.com' + Math.random() });

		// 	try {
		// 		await saveUser(profile);
		// 		return cb(null, profile);
		// 	} catch (e: any) {
		// 		throw new Error(e);
		// 	}
		// }
	)
);

// passport.serializeUser stores user object passed in the cb method above in req.session.passport
passport.serializeUser((user, cb) => {
	process.nextTick(function () {
		return cb(null, user);
	});
});

// passport.deserializeUser stores the user object in req.user
passport.deserializeUser(function (user: any, cb: (arg0: null, arg1: any) => any) {
	process.nextTick(function () {
		return cb(null, user);
	});
});

// for broader explanation of serializeUser and deserializeUser visit https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize

// An article that explains the concept of process.nextTick https://nodejs.dev/learn/understanding-process-nexttick

export default passport;
