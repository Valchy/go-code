import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import { CopyBlock, vs2015 } from 'react-code-blocks';

export default function MySnippets() {
	const [snippets, setSnippets] = useState([]);

	useEffect(() => {
		fetch(`/api/snippets`)
			.then(res => res.json())
			.then(snippets => setSnippets(snippets));
	}, []);

	return (
		<Layout>
			{snippets.map(({ author, code_snippet, code_language, _id }) => (
				<div key={_id} className="mb-5">
					<CopyBlock text={code_snippet} language={code_language} showLineNumbers={10} theme={vs2015} codeBlock />
					<span>Code Snippet by: {author}</span>
				</div>
			))}
		</Layout>
	);
}
