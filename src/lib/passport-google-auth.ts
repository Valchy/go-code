import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import User from '@models/User';
import connectMongo from '@utils/mongoose';

passport.use(
	'google',
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			callbackURL: '/api/auth/callback/google'
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				await connectMongo();
				const user = await User.findOne({ email: profile.email });

				// Create new user if they dont exist
				if (!user) {
					let userObj = {
						name: `${profile.given_name} ${profile.family_name}`,
						email: profile.email
					};

					// Save new user to database
					const newUser = new User(userObj);
					await newUser.save();

					done(null, newUser, { message: 'Successfully created a new user' });
				} else done(null, user, { message: 'Successfully logged in' });
			} catch (err) {
				done(err, false, { message: 'Something went wrong creating a user' });
			}
		}
	)
);

export default passport;
