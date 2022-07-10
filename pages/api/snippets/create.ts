import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';
import jwtVerify from '@lib/jwt-verification';

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
		const { name, email } = await jwtVerify(req, res);

		console.log(name);
		console.log(req.body.data.is_private);

		const { code_snippet, code_language, snippet_title, is_private } = req.body.data;
		const snippet = await Snippet.create({ author: name, author_email: email, code_snippet, code_language, snippet_title, is_private });

		res.status(200).json({ success: true, id: snippet._id.toString() });
	} catch (error) {
		res.json({ error });
	}
});

export default handler;
