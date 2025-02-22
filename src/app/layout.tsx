import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Header, Toaster } from '@/components/organisms';

import '@/styles/global.css';

export const metadata: Metadata = {
	title: 'ComWow',
	description: 'Welcome to ComWow - Social Media Management',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className="bg-background-white">
				<header id="portal-root" className="fixed w-full z-[999]" />
				<Toaster>
					<Header />
					{children}
				</Toaster>
			</body>
		</html>
	);
}
