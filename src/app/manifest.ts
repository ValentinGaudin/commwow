import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		id: '/',
		name: 'CommWow',
		short_name: 'CommWow',
		description:
			'Renforcez votre image avec une communication dynamique, créative et impactante. CommWow vous accompagne dans la gestion de vos réseaux sociaux.',
		start_url: '/',
		display: 'standalone',
		background_color: '#fffaf7',
		theme_color: '#F65E32',
		orientation: 'portrait-primary',
		icons: [
			{
				src: './icons/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: './icons/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
