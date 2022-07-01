import type { NextPage } from 'next';
import Layout from '@components/Layout';
import fetcher from '@utils/fecther';
import useSWR from 'swr';

const MySnippets: NextPage = () => {
	const { data, error } = useSWR('/api/snippets', fetcher);

	if (data) console.log(data);

	return <Layout>My snippets</Layout>;
};

export default MySnippets;
