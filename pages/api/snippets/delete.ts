import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';
import jwtVerify from '@lib/jwt-verification';

type Data = {
	success: boolean;
};

type ErrorType = {
	error: any;
};

const handler = nextConnect<NextApiRequest, NextApiResponse<Data | ErrorType>>().delete(async (req, res) => {
	try {
		await connectMongo();
		const { email } = await jwtVerify(req, res);

		const snippet = await Snippet.findOneAndDelete({ _id: req.body.id, author_email: email });

		res.status(200).json({ success: !!snippet });
	} catch (error) {
		res.json({ error, success: false });
	}
});

export default handler;
