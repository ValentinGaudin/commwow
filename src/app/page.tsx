'use client';

import React, { useEffect, useState } from 'react';
import {
	About,
	Hero,
	Services,
	Loader,
	NavigationBar,
	ContactModal,
	AnimatedArrow,
	Wave,
} from '@/components/atoms';

import { CustomSolutions, ScrollIndicator } from '@/components/molecules';

import { ServicesGrid } from '@/components/organisms';

export default function Home() {
	const [loading, setLoading] = useState(false);

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
					<NavigationBar />
					<ScrollIndicator />
					<AnimatedArrow />
					<Hero />
					<About />
					<Services />
					<ServicesGrid />
					<CustomSolutions />
					<ContactModal />
					<Wave className="mt-10" classNamePath="fill-primary/90" />
					<footer className="bg-primary/90 text-white text-center text-sm">
						Made with ❤️ by &nbsp;
						<a
							href="https://www.linkedin.com/in/gaudinvalentin/"
							target="_blank"
							rel="noreferrer"
							className="underline hover:text-orange-200 transition-colors duration-300"
						>
							Valentin Gaudin
						</a>
						&nbsp; &copy; {new Date().getFullYear()}
					</footer>
				</main>
			)}
		</>
	);
}
