import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>&lt; GoCode /&gt;</title>
				<link rel="icon" href="/favicon.png" />
				<meta name="description" content="A simple code snippet sharing platform" />
				<meta name="author" content="Valeri Sabev" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#ffffff" />
				''
			</Head>
			<Navbar />
			<main className="flex flex-col justify-center items-center mt-6">{children}</main>
			<Footer />
		</>
	);
}
