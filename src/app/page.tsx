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
} from '@/components/atoms';
import { CustomSolutions } from '@/components/molecules';
import { ServicesGrid } from '@/components/organisms';

export default function Home() {
	const [isDomReady, setIsDomReady] = useState(false);

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
			setIsDomReady(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	// useEffect(() => {
	// 	setIsDomReady(true);
	// }, []);

	return (
		<>
			{isDomReady ? (
				<Loader />
			) : (
				<>
					<NavigationBar />
					<AnimatedArrow />
					<Hero />
					<About />
					<Services />
					<ServicesGrid />
					<CustomSolutions />
					<ContactModal />
				</>
			)}
		</>
	);
}
