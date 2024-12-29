'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Users, Briefcase, Award, Target } from 'lucide-react';
import { Wave } from '@/components/atoms/index';

const Services = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.service-item', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top bottom-=100',
					end: 'bottom 50%',
					toggleActions: 'play none none reverse',
				},
				x: -50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<>
			<Wave classNamePath="fill-quaternary" />
			<section
				ref={sectionRef}
				id="services"
				className="bg-quaternary py-20 z-50"
			>
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-barba font-bold text-white mb-4">
							Vous & moi
						</h2>
						<i className="text-sm text-amber-50">
							Une collaboration sur mesure pour votre succès
						</i>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="service-item flex items-start space-x-4">
							<Users className="w-8 h-8 text-ternary/90 flex-shrink-0" />
							<div>
								<h3 className="text-xl font-bold text-white mb-2">
									Approche personnalisée :
								</h3>
								<p className="text-amber-50">
									Chaque projet est conçu autour de vos besoins et objectifs
									spécifiques, pour une communication qui vous ressemble
									vraiment.
								</p>
							</div>
						</div>

						<div className="service-item flex items-start space-x-4">
							<Briefcase className="w-8 h-8 text-ternary/90 flex-shrink-0" />
							<div>
								<h3 className="text-xl font-bold text-white mb-2">
									Expertise sectorielle :
								</h3>
								<p className="text-amber-50">
									Une connaissance approfondie de différents secteurs permet de
									proposer des solutions adaptées et pertinentes.
								</p>
							</div>
						</div>

						<div className="service-item flex items-start space-x-4">
							<Award className="w-8 h-8 text-ternary/90 flex-shrink-0 " />
							<div>
								<h3 className="text-xl font-bold text-white mb-2">
									Engagement qualité :
								</h3>
								<p className="text-amber-50">
									Un objectif clair : vous offrir des visuels percutants et des
									services à la hauteur de vos attentes.
								</p>
							</div>
						</div>

						<div className="service-item flex items-start space-x-4">
							<Target className="w-8 h-8 text-ternary/90 flex-shrink-0" />
							<div>
								<h3 className="text-xl font-bold text-white mb-2">
									Soutien aux petites entreprises :
								</h3>
								<p className="text-amber-50">
									Aider artisans, agriculteurs et petites entreprises à se
									démarquer en ligne et à travers des supports visuels cohérents
									et impactants.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Wave className="rotate-180 -mt-1" classNamePath="fill-quaternary" />
		</>
	);
};

export default Services;
