import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';

type SnippetType = {
	name: string;
};

type ErrorType = {
	error: any;
};

const handler = nextConnect<NextApiRequest, NextApiResponse<SnippetType | ErrorType>>().post(async (req, res) => {
	try {
		await connectMongo();
		const { code_snippet, code_language } = req.body.data;
		const snippet = await Snippet.create({ author: 'Valeri Sabev', code_snippet, code_language });

		console.log(snippet);
		res.status(301).redirect(`/snippets/${snippet._id}`);
	} catch (error) {
		res.json({ error });
	}
});

export default handler;
