import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';
import jwtVerify from '@lib/jwt-verification';

type SnippetType = {
	name: string;
};

type ErrorType = {
	error: any;
	data: [];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<SnippetType[] | ErrorType>) {
	try {
		await jwtVerify(req, res);
		await await connectMongo();

		const snippets = await Snippet.find({ snippet_title: req.query.q });
		res.status(200).json(snippets);
	} catch (error) {
		res.json({ error, data: [] });
	}
}
