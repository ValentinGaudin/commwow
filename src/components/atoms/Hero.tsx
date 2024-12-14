'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import OpenModalButton from '@/components/atoms/OpenModalButton';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const imageContainerRef = useRef<HTMLDivElement>(null);
	const textContentRef = useRef<HTMLDivElement>(null);
	const buttonContactRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: heroRef.current,
					start: 'top bottom',
					end: 'bottom top',
					toggleActions: 'play none none reverse',
				},
			});

			tl.from(textContentRef.current, {
				opacity: 0,
				x: 100,
				duration: 1,
				ease: 'power3.out',
				delay: 0.5,
			});

			tl.from(imageContainerRef.current, {
				opacity: 0,
				scale: 0.8,
				duration: 1.2,
				ease: 'power3.out',
			});

			tl.to(imageContainerRef.current, {
				y: '20px',
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: 'power4.inOut',
			});

			tl.from(
				buttonContactRef.current,
				{
					opacity: 0,
					y: 150,
					duration: 1,
					ease: 'power2.out',
				},
				'-=1.5'
			);
		});

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			id="hero"
			className="min-h-screen flex flex-col justify-center items-center space-y-16"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div
					ref={imageContainerRef}
					className="order-2 lg:order-1 flex items-center justify-center "
				>
					<div className="relative w-full aspect-square max-w-[600px] mx-auto group">
						<div className="absolute inset-0 bg-hero-pattern bg-center bg-no-repeat bg-fixed  group-hover:scale-110 group-hover:-rotate-6 transition-transform ease-in duration-500" />
						<div className="absolute inset-4 overflow-hidden ">
							<Image
								src="/images/image-01.png"
								width={500}
								height={500}
								alt="Enfant jouant dans un champ"
								className="w-full h-full object-cover group-hover:scale-95 group-hover:rotate-6 transition-transform ease-out duration-500 z-40"
							/>
						</div>
					</div>
				</div>

				<div
					ref={textContentRef}
					className="order-1 lg:order-2 flex items-center justify-center lg:text-left text-center"
				>
					<div className="max-w-xl mx-auto lg:mx-0 px-4 py-8">
						<div className="mb-8">
							<h1 className="text-[2.5rem] lg:text-6xl font-bold text-orange-600 mb-2 font-barba">
								Comm&apos;Wow
							</h1>
							<span className="text-primary font-cerebri">_________</span>
							<div className="text-xl md:text-3xl lg:text-5xl font-bold text-orange-600 mb-6">
								Propulsez
								<br />
								votre image
							</div>
						</div>
						<h2 className="text-xl lg:text-2xl text-orange-500 mb-8 font-cerebri">
							avec une communication sur-mesure
						</h2>
						<div>
							<p className="text-orange-700 mb-6 font-cerebri text-base md:text-lg xl:text-3xl">
								Ensemble, on crée une communication qui vous ressemble et qui
								vous donne des résultats.
							</p>
							<p className=" text-orange-600 font-cerebri text-sm md:text-base xl:text-xl">
								Mise en valeur de votre entreprise à travers des solutions
								visuelles cohérentes et impactantes, tant pour votre présence en
								ligne que pour vos supports imprimés.
							</p>
						</div>
					</div>
				</div>
			</div>

			<OpenModalButton ref={buttonContactRef} />
		</section>
	);
};

export default Hero;
