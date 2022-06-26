import type { NextPage } from 'next';
import Layout from '@components/Layout';
import GoogleButton from '@components/GoogleButton';

const GoCode: NextPage = () => {
	return (
		<Layout>
			<GoogleButton />
		</Layout>
	);
};

export default GoCode;
