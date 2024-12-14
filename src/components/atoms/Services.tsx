'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Users, Briefcase, Award, Target } from 'lucide-react';

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
		<section ref={sectionRef} id="services" className="py-20 bg-quaternary">
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
						<Users className="w-8 h-8 text-primary flex-shrink-0" />
						<div>
							<h3 className="text-xl font-bold text-white mb-2">
								Approche personnalisée :
							</h3>
							<p className="text-amber-50">
								Concentration sur les besoins et objectifs spécifiques des
								clients.
							</p>
						</div>
					</div>

					<div className="service-item flex items-start space-x-4">
						<Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
						<div>
							<h3 className="text-xl font-bold text-white mb-2">
								Expertise sectorielle :
							</h3>
							<p className="text-amber-50">
								Compréhension approfondie des différents secteurs pour des
								solutions adaptées.
							</p>
						</div>
					</div>

					<div className="service-item flex items-start space-x-4">
						<Award className="w-8 h-8 text-primary flex-shrink-0" />
						<div>
							<h3 className="text-xl font-bold text-white mb-2">
								Engagement envers la qualité :
							</h3>
							<p className="text-amber-50">
								Priorité à la satisfaction des clients avec des services de
								haute qualité.
							</p>
						</div>
					</div>

					<div className="service-item flex items-start space-x-4">
						<Target className="w-8 h-8 text-primary flex-shrink-0" />
						<div>
							<h3 className="text-xl font-bold text-white mb-2">
								Objectifs ciblés :
							</h3>
							<p className="text-amber-50">
								Aider les petites entreprises, artisans et agriculteurs à
								réussir, en ligne et à travers une communication visuelle
								cohérente.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
