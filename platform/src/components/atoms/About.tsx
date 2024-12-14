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
				y: 50,
				opacity: 0,
				duration: 1.8,
				stagger: 0.8,
			});

			gsap.from('.bg-about-card', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
					end: 'bottom',
					toggleActions: 'play none none reverse',
				},
				x: 50,
				opacity: 0,
				duration: 1.8,
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} id="about" className="bg-white py-20">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="about-card flex-1 lg:flex-none lg:w-1/2">
						<div className=" bg-gradient-to-bl from-ternary/90 via-primary/90 to-secondary/90 p-8 rounded-3xl min-h-full flex flex-col items-center justify-evenly group">
							<div className="mb-6">
								<Image
									src="/images/photo-10.png"
									alt="photo"
									width={500}
									height={400}
									className="rounded-3xl transform shadow-xl transition duration-500 group-hover:scale-95 group-hover:shadow-2xl"
								/>
							</div>
							<h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 ease-in-out duration-500">
								Pourquoi <span className="font-barba">Comm’ Wow</span>
							</h3>
							<p className="text-amber-50 text-sm md:text-lg">
								L&apos;idée de Comm&apos;Wow est née de ma volonté de combler un
								vide dans le marché de la communication. J’ai constaté que de
								nombreuses petites entreprises, artisans et agriculteurs
								manquent souvent de ressources et de compétences pour gérer
								efficacement leur présence en ligne et pour créer des supports
								imprimés percutants. Cette lacune m&apos;a incitée à créer une
								entreprise qui s&apos;engage à fournir des services de
								communication accessibles, qu&apos;il s&apos;agisse de stratégie
								digitale ou de création de supports imprimés, adaptés aux
								besoins spécifiques de ce public souvent négligé
							</p>
						</div>
					</div>

					<div className="bg-about-card flex flex-wrap bg-gradient-to-br from-ternary/90 via-primary/90 to-secondary/90 p-8 rounded-3xl">
						<div className="about-card grid grid-cols-2 gap-8 items-center group">
							<div className="mb-6">
								<Image
									className="rounded-3xl transform shadow-xl transition duration-300 group-hover:scale-95 group-hover:shadow-2xl"
									src={'/images/photo-9.png'}
									alt={'photo'}
									width={300}
									height={300}
								/>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition duration-500">
									Qui suis-je ?
								</h3>
								<p className="text-amber-50 text-sm md:text-lg">
									Je suis une entrepreneure passionnée par la communication, le
									marketing et le digital. J&apos;apprends continuellement, je
									m&apos;imprègne des secteurs et des domaines pour enrichir mes
									connaissances et fournir des solutions toujours plus adaptées
									à chaque client.
								</p>
							</div>
						</div>

						<div className="about-card grid grid-cols-2 gap-8 items-center group">
							<div className="mb-6 order-2">
								<Image
									className="rounded-3xl transform shadow-xl transition duration-300 group-hover:scale-95 group-hover:shadow-2xl"
									src={'/images/photo-7.png'}
									alt={'photo'}
									width={300}
									height={300}
								/>
							</div>
							<div className="order-1">
								<h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition duration-500">
									Mon engagement
								</h3>
								<p className="text-amber-50 text-sm md:text-lg">
									Mon objectif principal est d&apos;aider mes clients à établir
									une communication solide et professionnelle, tant en ligne
									qu&apos;à travers des supports imprimés, quel que soit leur
									domaine d&apos;activité ou leur taille. Je crois fermement que
									chaque entreprise mérite d&apos;avoir une voix unique et
									reconnaissable, que ce soit sur les plateformes digitales ou à
									travers des visuels percutants.
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
