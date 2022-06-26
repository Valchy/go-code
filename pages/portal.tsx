import type { NextPage } from 'next';
import Layout from '@components/Layout';
import GoogleButton from '@components/buttons/GoogleButton';
import GithubButton from '@components/buttons/GithubButton';

const GoCode: NextPage = () => {
	return (
		<Layout>
			<main className="flex flex-col justify-center items-center h-96">
				<h1 className="text-2xl mb-12">Please choose a method to sign-in</h1>
				<GoogleButton />
				<span className="my-2">or</span>
				<GithubButton />
			</main>
		</Layout>
	);
};

export default GoCode;
