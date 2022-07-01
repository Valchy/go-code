import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Snippets from '@components/snippet';

type SnippetType = {
	author: string;
	code_snippet: string;
	code_language: string;
	_id: string;
};

export default function Snippet() {
	const [snippet, setSnippet] = useState<SnippetType[]>([]);

	useEffect(() => {
		setTimeout(
			() =>
				fetch(`/api${window.location.pathname}`)
					.then(res => res.json())
					.then((snippet: SnippetType) => setSnippet([snippet])),
			1000
		);
	}, []);

	return (
		<Layout>
			<Snippets snippets={snippet} />
		</Layout>
	);
}
