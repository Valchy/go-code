import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import { CopyBlock, vs2015 } from 'react-code-blocks';

export default function Snippet() {
	const [snippet, setSnippet] = useState({ author: '', code_snippet: '', code_language: '' });

	useEffect(() => {
		fetch(`/api${window.location.pathname}`)
			.then(res => res.json())
			.then(snippet => setSnippet(snippet));
	}, []);

	return (
		<Layout>
			{snippet && (
				<>
					<CopyBlock text={snippet.code_snippet} language={snippet.code_language} showLineNumbers={10} theme={vs2015} codeBlock />
					<span>Code Snippet by: {snippet.author}</span>
				</>
			)}
		</Layout>
	);
}
