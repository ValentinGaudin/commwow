'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const sections = [
	{ id: 'hero', title: 'Accueil' },
	{ id: 'about', title: 'À propos' },
	{ id: 'services-grid', title: 'Services' },
	{ id: 'solutions', title: 'Solutions' },
	{ id: 'contact', title: 'Contact' },
];

const NavigationBar = () => {
	const [activeSection, setActiveSection] = useState<string>('');
	const router = useRouter();

	// Récupération de l'ancre avec `URLSearchParams`
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const params = new URLSearchParams(window.location.search);
			const targetSection = params.get('section');

			if (targetSection) {
				const element = document.getElementById(targetSection);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}
		}
	}, []);

	const observerOptions = {
		root: null,
		rootMargin: '0px 0px -20% 0px',
		threshold: 0.1,
	};

	const observerCallback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setActiveSection(entry.target.id);
			}
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);
		sections.forEach((section) => {
			const element = document.getElementById(section.id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, []);

	const handleNavigation = (sectionId: string) => {
		if (window.location.pathname !== '/') {
			router.push(`/?section=${sectionId}`);
		} else {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	return (
		<nav className="fixed top-0 w-screen z-50 flex justify-center items-center py-2 px-4 lg:py-4 lg:px-8 bg-ternary/90 backdrop-blur shadow-lg">
			<ul className="flex space-x-2 lg:space-x-6 text-white">
				{sections.map((section) => (
					<li key={section.id}>
						<button
							onClick={() => handleNavigation(section.id)}
							className={`transition-colors duration-300 font-light text-sm md:text-lg lg:text-xl ${
								activeSection === section.id
									? 'text-secondary/70 active:text-red'
									: 'hover:text-primary'
							}`}
						>
							{section.title}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavigationBar;
