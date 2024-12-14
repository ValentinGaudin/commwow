'use client';

import React, { useEffect, useState } from 'react';
import {
	About,
	Hero,
	Services,
	Loader,
	ServicesGrid,
	ContactModal,
	AnimatedArrow,
} from '@/components/atoms';

import { CustomSolutions, ScrollIndicator } from '@/components/molecules';

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<main>
					<ScrollIndicator />
					<AnimatedArrow />
					<Hero />
					<About />
					<Services />
					<ServicesGrid />
					<CustomSolutions />
					<ContactModal />
				</main>
			)}
		</>
	);
}
