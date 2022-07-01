import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Snippets from '@components/snippet';

type SnippetType = {
	author: string;
	code_snippet: string;
	code_language: string;
	_id: string;
};

export default function MySnippets() {
	const [snippets, setSnippets] = useState<SnippetType[]>([]);

	useEffect(() => {
		setTimeout(
			() =>
				fetch(`/api/snippets`)
					.then(res => res.json())
					.then((snippets: SnippetType[]) => setSnippets(snippets)),
			1000
		);
	}, []);

	return (
		<Layout>
			<div className="flex flex-wrap justify-around">
				<Snippets snippets={snippets} />
			</div>
		</Layout>
	);
}
