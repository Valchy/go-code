import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import connectMongo from '@utils/mongoose';
import Snippet from '@models/Snippet';

type SnippetType = {
	name: string;
};

type ErrorType = {
	error: any;
	data: [];
};

const handler = nextConnect().post((req, res) => {
	res.json('cool');
});

export default handler;
