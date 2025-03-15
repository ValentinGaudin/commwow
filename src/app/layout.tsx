import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import '@/styles/global.css';

import { Header, Toaster } from '@/components/organisms';
import { Footer, Wave } from '@/components/atoms';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
	metadataBase: new URL('https://www.commwow.fr'),
	title: {
		default: 'CommWow - Communication dynamique et créative',
		template: '%s | CommWow',
	},
	description:
		'CommWow - Renforcez votre image avec une communication dynamique, créative et impactante. CommWow vous accompagne dans la gestion de vos réseaux sociaux.',
	applicationName: 'CommWow',
	authors: [{ name: 'Chloé', url: 'https://commwow.fr' }],
	generator: 'Next.js',
	keywords: [
		'communication',
		'réseaux sociaux',
		'branding',
		'marketing digital',
		'création de contenu',
	],
	referrer: 'origin',
	creator: 'Chloé',
	publisher: 'CommWow',
	robots: 'index, follow',
	alternates: {
		canonical: 'https://commwow.fr',
	},
	icons: {
		icon: '/favicon.ico',
		apple: '../../public/icons/apple-touch-icon.png',
	},
	manifest: process.env.URL + '/site.webmanifest',
	openGraph: {
		type: 'website',
		url: 'https://commwow.fr',
		title: 'CommWow - Communication dynamique et créative',
		description:
			'Renforcez votre image avec une communication dynamique, créative et impactante. CommWow vous accompagne dans la gestion de vos réseaux sociaux.',
		siteName: 'CommWow',
		images: [
			{
				url: 'https://commwow.fr/images/og-image.png',
				width: 1200,
				height: 630,
				alt: 'CommWow - Communication dynamique et créative',
			},
		],
	},
	verification: {
		google: 'jM5Ows8fCof5SlfJDIVzjRFVDaJk0u3ZtSagMQ8sNQ0',
	},
	formatDetection: {
		telephone: false,
	},
};

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html lang="fr">
			<body className="bg-background-white">
				<header id="portal-root" className="fixed w-full z-[999]" />
				<Toaster>
					<Header />
					{children}
					<Analytics />
				</Toaster>
				<Wave classNamePath="fill-ternary/90" />
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
