import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';
// import type { Snippet } from '@types/index';

type Snippet = {
	name: string;
};

type ErrorType = {
	error: any;
	data: [];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Snippet[] | ErrorType>) {
	try {
		console.log('CONNECTING TO MONGO');
		await connectMongo();
		console.log('CONNECTED TO MONGO');

		console.log('CREATING DOCUMENT');
		const snippet = await Snippet.create({ name: 'Valeri', email: 'valchygaming@gmail.com' + Math.random() });
		console.log('CREATED DOCUMENT');

		// res.json({ test });
		const snippets = await Snippet.find();
		console.log(snippets);
		res.status(200).json([{ name: 'Valeri Sabev' }]);
	} catch (error) {
		console.log(error);
		res.json({ error, data: [] });
	}
}
