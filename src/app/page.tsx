'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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
		const handleAnchorClick = (event: MouseEvent) => {
			const anchor = event.target as HTMLAnchorElement;
			if (
				anchor.tagName === 'A' &&
				anchor.getAttribute('href')?.startsWith('#')
			) {
				event.preventDefault();
				const targetId = anchor.getAttribute('href')?.substring(1);
				const targetElement = targetId
					? document.getElementById(targetId)
					: null;

				if (targetElement) {
					const offset =
						window.innerHeight / 2 -
						targetElement.getBoundingClientRect().height / 2;
					window.scrollTo({
						top: targetElement.offsetTop - offset,
						behavior: 'smooth',
					});
				}
			}
		};

		document.addEventListener('click', handleAnchorClick);

		return () => {
			document.removeEventListener('click', handleAnchorClick);
		};
	}, []);

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
				<>
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
						<div className="mr-2">
							<p>
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
							</p>
						</div>
						<Link href="/mentions-legales">Mentions légales</Link>
					</footer>
				</>
			)}
		</>
	);
}
