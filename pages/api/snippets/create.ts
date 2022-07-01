import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';

type Data = {
	success: boolean;
	id: string;
};

type ErrorType = {
	error: any;
};

const handler = nextConnect<NextApiRequest, NextApiResponse<Data | ErrorType>>().post(async (req, res) => {
	try {
		await connectMongo();
		const { code_snippet, code_language, snippet_title } = req.body.data;
		const snippet = await Snippet.create({ author: 'Valeri Sabev', code_snippet, code_language, snippet_title });

		res.status(200).json({ success: true, id: snippet._id.toString() });
	} catch (error) {
		res.json({ error });
	}
});

export default handler;
