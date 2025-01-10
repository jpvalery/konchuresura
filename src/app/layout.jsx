import clsx from 'clsx';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import '@/styles/tailwind.css';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata = {
	title: 'Konchu Resura — Be the Last Bug Standing!',
	description: 'A free and open-source game that is ready and easy to print.',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={clsx(
				'h-full scroll-smooth bg-white antialiased',
				inter.variable,
			)}
		>
			<head>
				<link
					rel="preconnect"
					href="https://cdn.fontshare.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://api.fontshare.com/v2/css?f[]=sharpie&display=swap"
				/>
			</head>
			<body className="flex min-h-full flex-col">{children}</body>
			<Script
				data-website-id="5f22e86a-81c9-4b40-83ec-451efb29b753"
				src="https://analytics.jpvalery.com/script.js"
				strategy="afterInteractive"
			/>
		</html>
	);
}
