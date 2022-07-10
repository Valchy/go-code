import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Snippets from '@components/snippet';
import PrimaryButton from '@components/buttons/Primary';
import type { SnippetType } from '@components/snippet/types';

export default function MySnippets() {
	const [snippets, setSnippets] = useState<SnippetType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(
			() =>
				fetch(`/api/snippets`)
					.then(res => res.json())
					.then((snippets: SnippetType[]) => {
						setSnippets(snippets);
						setIsLoading(false);
					}),
			1000
		);
	}, []);

	return (
		<Layout>
			<div className="flex flex-wrap justify-around">
				<Snippets snippets={snippets} isLoading={isLoading} />
			</div>
			<div className="flex mt-5">
				<PrimaryButton handler={() => (window.location.href = '/snippets/create')} text="Create Snippet" />
				<PrimaryButton handler={() => (window.location.href = '/api/auth/sign-out')} text="Sign Out" />
			</div>
		</Layout>
	);
}
