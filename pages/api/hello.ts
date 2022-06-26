import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/gocode_db');
const User = mongoose.model('User', { name: String });

type Data = {
	name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ name: 'Valeri Sabev' });
}
