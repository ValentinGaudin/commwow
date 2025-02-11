'use client';

import React, { useEffect, useRef } from 'react';

import { NewsLetterForm } from '@/components/atoms';
import gsap from 'gsap';

const NewsLetterCard = () => {
	const newsLetterCard = useRef<HTMLDivElement>(null);
	const newsLetterTitleFormRef = useRef<HTMLDivElement>(null);
	const newsLetterBoxFormRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: newsLetterCard.current,
					start: 'top bottom',
					end: 'bottom top',
					toggleActions: 'play none none reverse',
				},
			});

			tl.from(newsLetterCard.current, {
				opacity: 0,
				y: 0,
				duration: 1,
				ease: 'power2.inOut',
			}).add([
				gsap.from(newsLetterTitleFormRef.current, {
					opacity: 0,
					y: 50,
					duration: 1,
					ease: 'power3.inOut',
				}),
				gsap.from(newsLetterBoxFormRef.current, {
					opacity: 0,
					y: 100,
					duration: 1,
					ease: 'power3.inOut',
				}),
			]);
		});

		return () => ctx.revert();
	}, []);

	return (
		<div ref={newsLetterCard} className="text-center mt-12 newsletter-box p-2">
			<h3
				className="text-2xl font-bold text-primary mb-6"
				ref={newsLetterTitleFormRef}
			>
				Restez informé de nos actualités
			</h3>
			<div className="flex justify-center" ref={newsLetterBoxFormRef}>
				<NewsLetterForm />
			</div>
		</div>
	);
};

export default NewsLetterCard;
