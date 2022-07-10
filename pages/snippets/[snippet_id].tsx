import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Snippets from '@components/snippet';
import type { SnippetType } from '@components/snippet/types';

export default function Snippet() {
	const [snippet, setSnippet] = useState<SnippetType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(
			() =>
				fetch(`/api${window.location.pathname}`)
					.then(res => res.json())
					.then((snippet: SnippetType) => {
						if (!snippet.error) setSnippet([snippet]);
						setIsLoading(false);
					}),
			1000
		);
	}, []);

	return (
		<Layout>
			<Snippets snippets={snippet} isLoading={isLoading} showOne />
		</Layout>
	);
}
