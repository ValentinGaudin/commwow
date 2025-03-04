'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const About = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.about-card', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
					end: 'bottom',
					toggleActions: 'play none none reverse',
				},
				opacity: 0,
				duration: 1.8,
			});

			gsap.from('.bg-about-card', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
					end: 'bottom',
					toggleActions: 'play none none reverse',
				},
				opacity: 0,
				duration: 1.5,
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} id="about" className="py-20">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="about-card flex-1 lg:flex-none lg:w-1/2">
						<div className="bg-background-3 bg-cover bg-center p-8 rounded-3xl min-h-full flex flex-col items-center justify-evenly group">
							<div className="mb-6">
								<Image
									src="/images/photo-04.png"
									alt="Une personne écrivant dans son carnet de notes."
									height={2655}
									width={1920}
									loading="lazy"
									className="rounded-3xl transform shadow-xl transition duration-500 group-hover:scale-105 group-hover:shadow-2xl"
								/>
							</div>
							<h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:scale-105 ease-in-out duration-500">
								Pourquoi <span className="font-barba">Comm’ Wow</span>
							</h3>
							<p className="text-amber-50 text-sm font-light text-pretty">
								Comm&apos;Wow est né pour répondre aux besoins des petites
								entreprises, artisans et agriculteurs, souvent laissés de côté
								en matière de communication. L&apos;objectif ? Proposer des
								services accessibles et adaptés, que ce soit pour la présence en
								ligne ou des supports imprimés percutants, tout en valorisant
								leur savoir-faire unique.
							</p>
						</div>
					</div>

					<div className="bg-about-card flex flex-wrap bg-background-3 bg-cover bg-center p-8 rounded-3xl">
						<div className="about-card grid grid-cols-2 gap-8 items-center justify-items-center group">
							<Image
								loading="lazy"
								className="rounded-3xl transform shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-2xl"
								src={'/images/photo-03.png'}
								alt="Un bureau avec une boite de crayons, un ordinateur, un jus de fruit, un café, un cahier de notes."
								width={790}
								height={1152}
							/>
							<div>
								<h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:scale-105 transition duration-500">
									Qui suis-je ?
								</h3>
								<p className="text-amber-50 text-sm font-light text-pretty">
									Entrepreneure passionnée par la communication et le marketing,
									j&apos;ai à cœur d’accompagner les entreprises avec des
									solutions sur-mesure. Toujours curieuse et en quête
									d&apos;apprendre, je m&apos;imprègne des secteurs et des
									spécificités de mes clients pour créer une communication qui
									leur ressemble vraiment.
								</p>
							</div>
						</div>

						<div className="about-card grid grid-cols-2 gap-8 items-center justify-items-center group">
							<Image
								loading="lazy"
								className="order-2 rounded-3xl transform shadow-xl transition duration-300 group-hover:scale-105 group-hover:shadow-2xl"
								src={'/images/photo-02.png'}
								alt="Une personne sur son téléphone assis devant son bureau, une tasse de café, un ordinateur et son carnet de notes."
								width={790}
								height={1143}
							/>
							<div className="order-1">
								<h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:scale-105 transition duration-500">
									Mon engagement
								</h3>
								<p className="text-amber-50 text-sm font-light text-pretty">
									Accompagner chaque client dans la création d’une communication
									solide et professionnelle, adaptée à son identité et à ses
									besoins. Qu&apos;il s&apos;agisse de présence en ligne ou de
									supports imprimés, chaque entreprise mérite une voix unique et
									des visuels qui marquent les esprits.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
