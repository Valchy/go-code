import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Snippets from '@components/snippet';
import PrimaryButton from '@components/buttons/Primary';
import { decode as jwtDecode } from 'jsonwebtoken';
import getCookie from '@utils/getCookie';
import type { SnippetType } from '@components/snippet/types';

type User = {
	name: string;
	email: string;
};

export default function MySnippets() {
	const [snippets, setSnippets] = useState<SnippetType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [authenticated, setAuthenticated] = useState<User>({ name: '...', email: '...' });

	useEffect(() => {
		const jwtToken = getCookie('jwt');
		const decoded = jwtDecode(jwtToken as string);
		setAuthenticated(decoded as User);

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
			<span>
				Logged in as: <b>{authenticated.name}</b> with <i>{authenticated.email}</i>
			</span>
			<Snippets snippets={snippets} isLoading={isLoading} />
			<div className="flex mt-5">
				<PrimaryButton handler={() => (window.location.href = '/snippets/create')} text="Create Snippet" />
				<PrimaryButton handler={() => (window.location.href = '/api/auth/sign-out')} text="Sign Out" />
			</div>
		</Layout>
	);
}
