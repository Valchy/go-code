import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Snippets from '@components/snippet';
import type { SnippetType } from '@components/snippet/types';

export default function Search() {
	const [snippets, setSnippets] = useState<SnippetType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(
			() =>
				fetch(`/api/snippets/search?q=${window.location.search.substr(1).split('=')[1]}`)
					.then(res => res.json())
					.then((snippets: SnippetType[]) => {
						if (snippets.length > 0) setSnippets(snippets);
						setIsLoading(false);
					}),
			1000
		);
	}, []);

	return (
		<Layout>
			<Snippets snippets={snippets} isLoading={isLoading} />
		</Layout>
	);
}
