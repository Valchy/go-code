import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

type ResTypes = {
	name: string;
	age: number;
	role: string;
	email: string;
	url: string;
};

export const handler = nextConnect<NextApiRequest, NextApiResponse<ResTypes>>().get((req, res) => {
	res.status(200).json({
		name: 'Valeri Sabev',
		age: new Date().getFullYear() - new Date('02/11/2002').getUTCFullYear(),
		role: 'Full Stack Web Developer',
		email: 'contact@valerisabev.com',
		url: 'https://valerisabev.com'
	});
});

export default handler;
