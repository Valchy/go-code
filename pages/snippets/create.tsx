import type { NextPage } from 'next';
import Layout from '@components/Layout';
import CodeEditor from '@components/codeEditor';

const CreateSnippet: NextPage = () => {
	return (
		<Layout>
			<CodeEditor />
		</Layout>
	);
};

export default CreateSnippet;
