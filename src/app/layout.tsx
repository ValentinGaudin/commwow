import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import { BaseTemplate } from '@/components/templates';
import { Header } from '@/components/organisms';

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
		<html lang="en">
			<body>
				<BaseTemplate>
					<Header />
					{children}
				</BaseTemplate>
			</body>
		</html>
	);
}
