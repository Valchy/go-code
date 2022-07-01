import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';

type SnippetType = {
	name: string;
};

type ErrorType = {
	error: any;
	data: [];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<SnippetType[] | ErrorType>) {
	try {
		await connectMongo();
		await Snippet.create({ name: 'Valeri', email: 'valchygaming@gmail.com' + Math.random() });

		const snippets = await Snippet.find();
		res.status(200).json(snippets || []);
	} catch (error) {
		console.log(error);
		res.json({ error, data: [] });
	}
}
