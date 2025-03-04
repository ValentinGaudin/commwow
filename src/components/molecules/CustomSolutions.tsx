'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { Card, PricingCard } from '@/components/atoms';
import { ContactCard, NewsLetterCard } from '@/components/molecules';

import { pricingData } from '@/data/pricing';

const CustomSolutions = () => {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	const sectionRef = useRef<HTMLDivElement>(null);
	const startCard = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(startCard.current, {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top bottom+=50',
					end: 'bottom 80%',
					toggleActions: 'play none none reverse',
				},
				y: -150,
				opacity: 0,
				duration: 0.8,
				delay: 0.4,
			});
		});

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: cardsRef.current,
					start: 'top 80%',
					end: 'bottom 100%',
					toggleActions: 'play none none reverse',
				},
			});

			timeline.from(cardsRef.current, {
				opacity: 0,
				stagger: 0.6,
				duration: 1,
				ease: 'power1.out',
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} id="solutions" className="py-20 overflow-hidden">
			<div className="container mx-auto">
				<div ref={startCard} className="space-y-2 mb-5 p-4 md:p-6 lg:p-5">
					<h2 className="text-4xl lg:text-5xl font-bold  text-orange-500">
						Solutions sur mesure nées d&apos;une écoute attentive
					</h2>
					<div className="w-32 h-1 bg-orange-400 rounded-full" />
					<p>
						Chaque entreprise est unique, et vos besoins le sont tout autant.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-16">
					{pricingData.map((pricing, index) => (
						<div
							key={index}
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}
							className={`max-w-[280px] max-h-[500px] transition-all duration-300 ease-in-out ${
								hoveredCard === index
									? 'shadow-3xl scale-105 z-10'
									: hoveredCard === null
										? null
										: 'opacity-50 scale-95'
							}`}
						>
							<Card
								ref={(el) => {
									if (el) cardsRef.current[index] = el;
								}}
								key={index}
							>
								<PricingCard {...pricing} />
							</Card>
						</div>
					))}
				</div>

				<ContactCard />

				<NewsLetterCard />
			</div>
		</section>
	);
};

export default CustomSolutions;
