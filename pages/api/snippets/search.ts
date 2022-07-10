import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';
import jwtVerify from '@lib/jwt-verification';
import type { SnippetType } from '@components/snippet/types';

type ErrorType = {
	error: any;
	data: [];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<SnippetType[] | ErrorType>) {
	try {
		await await connectMongo();
		const { email } = await jwtVerify(req, res);

		const snippets = await Snippet.find({ snippet_title: req.query.q });
		res.status(200);

		snippets.filter(snippet => {
			if (snippet.is_private && snippet.author_email !== email) return false;
			return true;
		});

		if (snippets.length === 0) res.json({ error: 'Snippets not found', data: [] });
		else res.json(snippets);
	} catch (error) {
		res.json({ error, data: [] });
	}
}
