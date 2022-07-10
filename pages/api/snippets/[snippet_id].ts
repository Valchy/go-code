import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';
import jwtVerify from '@lib/jwt-verification';
import type { SnippetType } from '@components/snippet/types';

type ErrorType = {
	error: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<SnippetType | ErrorType>) {
	try {
		await connectMongo();
		const { email } = await jwtVerify(req, res);

		const snippet = await Snippet.findById(req.query.snippet_id).exec();
		res.status(200);

		if (!snippet) res.json({ error: 'Snippet not found' });
		else if (snippet.is_private && snippet.author_email !== email) res.json({ error: 'Snippet is private' });
		else res.json(snippet);
	} catch (error) {
		res.status(403).json({ error });
	}
}
