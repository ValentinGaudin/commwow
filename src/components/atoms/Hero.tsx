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
			className="md:h-[calc(100vh-70px)] mt-[40px] md:mt-[60px] flex flex-col justify-center items-center space-y-16"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-12 xl:gap-20">
				<div
					ref={imageContainerRef}
					className="order-2 lg:order-1 flex items-center justify-center "
				>
					<div className="relative w-4/6 md:w-5/6 lg:w-full aspect-square max-w-[600px] mx-auto group">
						<div className="absolute inset-0 bg-hero-pattern bg-center bg-no-repeat bg-cover scale-110 group-hover:scale-125 group-hover:-rotate-6 transition-transform ease-in duration-500" />
						<div className="absolute inset-4 overflow-hidden flex items-center justify-center">
							<Image
								src="/images/photo-01.png"
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
					<div className="max-w-xl mx-auto lg:mx-0 px-4 py-8 mb-1 md:mb-4 lg:mb-8">
						<h1 className="text-[2.5rem] lg:text-6xl font-bold text-orange-600 mb-2 font-barba leading-6 drop-shadow-lg">
							Comm&apos;Wow
						</h1>
						<span className="text-black">_________</span>
						<p className="text-xl md:text-2xl lg:text-4xl  font-bold text-orange-600 my-5">
							<span className="relative after:content-[''] after:bg-deco-hero after:bg-no-repeat after:bg-fixed after:bg-contain after:h-12 after:w-12 after:absolute after:-top-8 after:-right-10">
								Propulsez
							</span>
							<br />
							<span className="text-xl md:text-xl lg:text-3xl  font-light">
								votre image
							</span>
						</p>
						<p className="text-black mb-1 md:mb-4 lg:mb-6 text-base md:text-lg xl:text-2xl">
							Ensemble, concevons une communication qui capte l&apos;attention
							et reflète votre identité.
						</p>
						<p className=" text-black  text-sm md:text-base xl:text-lg">
							Des solutions visuelles cohérentes et percutantes, pensées pour
							valoriser votre entreprise, que ce soit en ligne ou sur vos
							supports imprimés.
						</p>
					</div>
				</div>
			</div>

			<OpenModalButton
				ref={buttonContactRef}
				className={`px-16 py-6 text-xl rounded-xl shadow-2xl`}
			/>
		</section>
	);
};

export default Hero;
