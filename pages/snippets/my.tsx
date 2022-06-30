import type { NextPage } from 'next';
import Layout from '@components/Layout';
import useSWR from 'swr';
import fetcher from '@utils/fecther';

const GoCode: NextPage = () => {
	const { data, error } = useSWR('/api/snippets', fetcher);

	if (data) console.log(data);

	return <Layout>My snippets</Layout>;
};

export default GoCode;
