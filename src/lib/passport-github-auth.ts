import { Strategy as GitHubStrategy } from 'passport-github2';
import passport from 'passport';
import connectMongo from '@utils/mongoose';
import User from '@models/User';

passport.use(
	'github',
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
			callbackURL: '/api/auth/callback/github',
			passReqToCallback: true
		},
		async (accessToken: any, refreshToken: any, profile: any, done: any) => {
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
