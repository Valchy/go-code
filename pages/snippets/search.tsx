import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Snippets from '@components/snippet';

type SnippetType = {
	author: string;
	snippet_title: string;
	code_snippet: string;
	code_language: string;
	_id: string;
};

export default function Search() {
	const [snippets, setSnippets] = useState<SnippetType[]>([]);

	useEffect(() => {
		setTimeout(
			() =>
				fetch(`/api/snippets/all`)
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
