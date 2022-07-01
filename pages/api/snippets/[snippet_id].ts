import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';

type SnippetType = {
	author: string;
	code_snippet: string;
	code_language: string;
};

type ErrorType = {
	error: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<SnippetType | ErrorType>) {
	try {
		await connectMongo();
		const snippet = await Snippet.findById(req.query.snippet_id).exec();

		res.status(200).json(snippet);
	} catch (error) {
		res.status(403).json({ error });
	}
}
