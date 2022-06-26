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
				<title>GoCode</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
