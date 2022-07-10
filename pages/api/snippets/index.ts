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
		await connectMongo();
		const { email } = await jwtVerify(req, res);

		const snippets = await Snippet.find({ author_email: email });
		res.status(200).json(snippets);
	} catch (error) {
		res.json({ error, data: [] });
	}
}
