'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail } from 'lucide-react';

import { InstagramIcon, FacebookIcon } from '@/components/atoms/icons';
import {
	Card,
	NewsLetterForm,
	OpenModalButton,
	PricingCard,
} from '@/components/atoms';

import { pricingData } from '@/data/pricing';

const CustomSolutions = () => {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const sectionRef = useRef<HTMLDivElement>(null);
	const newsLetterTitleFormRef = useRef<HTMLDivElement>(null);
	const newsLetterBoxFormRef = useRef<HTMLDivElement>(null);
	const buttonContactRef = useRef<HTMLButtonElement>(null);
	const socialMediaRef = useRef<HTMLDivElement>(null);
	const bottomCard = useRef<HTMLDivElement>(null);
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

			gsap.from(bottomCard.current, {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top bottom+=50',
					end: 'bottom',
					toggleActions: 'play none none reverse',
				},
				x: 50,
				opacity: 0,
				duration: 0.8,
				delay: 0.6,
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

			timeline
				.from(cardsRef.current, {
					opacity: 0,
					stagger: 0.6,
					duration: 1,
					ease: 'power1.out',
				})
				.from(buttonContactRef.current, {
					opacity: 0,
					x: -100,
					duration: 1,
					ease: 'power1.out',
				})
				.from(
					socialMediaRef.current,
					{
						opacity: 0,
						x: 100,
						duration: 1,
						ease: 'power1.out',
					},
					'+=0.3'
				)
				.from(
					newsLetterTitleFormRef.current,
					{
						opacity: 0,
						y: -100,
						duration: 1,
						ease: 'power1.out',
					},
					'+=0.3'
				)
				.from(newsLetterBoxFormRef.current, {
					opacity: 0,
					y: 200,
					duration: 1,
					ease: 'power2.out',
				});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="solutions"
			className="py-20 bg-orange-50 overflow-hidden"
		>
			<div className="container mx-auto">
				<div ref={startCard} className="space-y-2 mb-5 p-4 md:p-6 lg:p-5">
					<h2 className="text-4xl lg:text-5xl font-bold  text-orange-500">
						Solutions sur mesure nées d&apos;une écoute attentive
					</h2>
					<div className="w-32 h-1 bg-orange-400 rounded-full" />
					<p>
						Chaque entreprise est unique, et vos besoins le sont tout autant.
						Chez Comm’Wow, pas d’offres rigides : chaque collaboration repose
						sur un véritable échange pour concevoir des solutions
						personnalisées.
					</p>
					<p>
						Cependant, pour vous permettre de vous projeter, voici quelques
						exemples de prestations :
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

				<div id="contact" ref={bottomCard} className="px-2 md:px-16 lg:px-32">
					<Card>
						<div className="flex flex-col sm:flex-row items-center space-y-4 justify-between lg:mx-28 z-20">
							<OpenModalButton ref={buttonContactRef} />

							<div ref={socialMediaRef} className="flex items-center gap-6">
								<a
									href="https://instagram.com/CommWow"
									className="text-orange-600 hover:text-orange-700 transition-colors"
								>
									<InstagramIcon />
								</a>
								<a
									href="https://facebook.com/CommWow"
									className="text-orange-600 hover:text-orange-700 transition-colors"
								>
									<FacebookIcon />
								</a>
								<a
									href="mailto:chloe@commwow.fr"
									className="text-orange-600 hover:text-orange-700 transition-colors"
								>
									<Mail className="w-6 h-6" />
								</a>
							</div>
						</div>
					</Card>
				</div>

				<div className="text-center mt-12 newsletter-box">
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
			</div>
		</section>
	);
};

export default CustomSolutions;
