'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FirstSection, Loader, SecondSection } from '@/components/atoms';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

export default function Home() {
	const sectionsRef = useRef<(HTMLElement | null)[]>([]);
	const imagesRef = useRef<HTMLDivElement[]>([]);
	const headingsRef = useRef<HTMLHeadingElement[]>([]);
	const outerWrappersRef = useRef<HTMLDivElement[]>([]);
	const innerWrappersRef = useRef<HTMLDivElement[]>([]);
	const currentIndexRef = useRef<number>(-1);
	const animatingRef = useRef<boolean>(false);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const sections = sectionsRef.current;
		const images = imagesRef.current;
		const outerWrappers = outerWrappersRef.current;
		const innerWrappers = innerWrappersRef.current;

		gsap.set(outerWrappers, { yPercent: 100 });
		gsap.set(innerWrappers, { yPercent: -100 });

		const gotoSection = (index: number, direction: number) => {
			const wrap = gsap.utils.wrap(0, sections.length);
			index = wrap(index);

			if (animatingRef.current) return;
			animatingRef.current = true;

			const fromTop = direction === -1;
			const dFactor = fromTop ? -1 : 1;

			const tl = gsap.timeline({
				defaults: { duration: 1.25, ease: 'power1.inOut' },
				onComplete: () => {
					animatingRef.current = false;
				},
			});

			if (currentIndexRef.current >= 0) {
				gsap.set(sections[currentIndexRef.current], { zIndex: 0 });
				tl.to(images[currentIndexRef.current], { yPercent: -15 * dFactor }).set(
					sections[currentIndexRef.current],
					{ autoAlpha: 0 }
				);
			}

			gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
			tl.fromTo(
				[outerWrappers[index], innerWrappers[index]],
				{ yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
				{ yPercent: 0 },
				0
			)
				.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
				.fromTo(
					headingsRef.current[index]?.querySelectorAll('span'),
					{ autoAlpha: 0, yPercent: 150 * dFactor },
					{
						autoAlpha: 1,
						yPercent: 0,
						duration: 1,
						ease: 'power2',
						stagger: 0.02,
					},
					0.2
				);
			currentIndexRef.current = index;
		};

		Observer.create({
			type: 'wheel,touch,pointer',
			wheelSpeed: -1,
			onDown: () =>
				!animatingRef.current && gotoSection(currentIndexRef.current - 1, -1),
			onUp: () =>
				!animatingRef.current && gotoSection(currentIndexRef.current + 1, 1),
			tolerance: 10,
			preventDefault: true,
		});

		gotoSection(0, 1);
	}, []);

	const sections = [
		{
			classNames: {
				section: 'w-full flex flex-wrap md:flex-row flex-col',
				outerWrapper: 'w-full h-full',
				innerWrapper: 'w-full h-full',
				image: '',
			},
			id: 'Propulsez votre image',
			content: <FirstSection />,
		},
		{
			classNames: {
				section: 'w-full flex flex-wrap md:flex-row flex-col',
				outerWrapper: 'w-full h-full',
				innerWrapper: 'w-full h-full',
				image: '',
			},
			id: 'Pourquoi Comm’ Wow',
			content: <SecondSection />,
		},
	];

	return (
		<>
			{loading ? (
				<Loader loading={loading} />
			) : (
				<main>
					<div>
						{/*<header className="bg-transparent fixed w-full flex justify-between items-center p-5 text-white uppercase text-sm z-50">*/}
						{/*	<div className={'text-white'}>Animated Sections</div>*/}
						{/*	<a*/}
						{/*		href="https://codepen.io/BrianCross/pen/PoWapLP"*/}
						{/*		target="_blank"*/}
						{/*		rel="noopener noreferrer"*/}
						{/*	>*/}
						{/*		Original By Brian*/}
						{/*	</a>*/}
						{/*</header>*/}

						{sections.map((section, index) => (
							<section
								key={index}
								ref={(el) => {
									sectionsRef.current[index] = el!;
								}}
								id={section.id}
								className={`fixed inset-0 opacity-0 ${section.classNames.section}`}
							>
								<div
									ref={(el) => {
										outerWrappersRef.current[index] = el!;
									}}
									className="tracking-widest"
								>
									<div
										ref={(el) => {
											innerWrappersRef.current[index] = el!;
										}}
										className=""
									>
										<div
											ref={(el) => {
												imagesRef.current[index] = el!;
											}}
											className={``}
										>
											<div
												ref={(el) => {
													headingsRef.current[index] = el!;
												}}
												className="tracking-widest"
											>
												<span className="">{section.content}</span>
											</div>
										</div>
									</div>
								</div>
							</section>
						))}
					</div>
				</main>
			)}
		</>
	);
}
