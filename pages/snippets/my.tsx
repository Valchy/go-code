import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Snippets from '@components/snippet';
import PrimaryButton from '@components/buttons/Primary';

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
			<div className="flex">
				<PrimaryButton handler={() => (window.location.href = '/snippets/create')} text="Create Snippet" />
				<PrimaryButton handler={() => (window.location.href = '/api/auth/sign-out')} text="Sign Out" />
			</div>
		</Layout>
	);
}
