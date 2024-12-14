import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Facebook, Mail } from 'lucide-react';
import { NewsLetterForm } from '@/components/atoms';
import OpenModalButton from '@/components/atoms/OpenModalButton';

const CustomSolutions = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const newsLetterTitleFormRef = useRef<HTMLDivElement>(null);
	const newsLetterBoxFormRef = useRef<HTMLDivElement>(null);
	const buttonContactRef = useRef<HTMLButtonElement>(null);
	const socialMediaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.content-left', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top bottom+=50',
					end: 'bottom 80%',
					toggleActions: 'play none none reverse',
				},
				x: -50,
				opacity: 0,
				duration: 0.8,
				delay: 0.4,
			});

			gsap.from('.content-right', {
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
					trigger: buttonContactRef.current,
					start: 'top 80%',
					end: 'bottom 100%',
					toggleActions: 'play none none reverse',
				},
			});

			timeline.from(buttonContactRef.current, {
				opacity: 0,
				x: -100,
				duration: 2,
				ease: 'power1.out',
			});

			timeline.from(
				socialMediaRef.current,
				{
					opacity: 0,
					x: 100,
					duration: 2,
					ease: 'power1.out',
				},
				'+=0.5'
			);
		});

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: newsLetterTitleFormRef.current,
					start: 'top 80%',
					end: 'bottom 100%',
					toggleActions: 'play none none reverse',
				},
			});

			timeline.from(
				newsLetterTitleFormRef.current,
				{
					opacity: 0,
					y: -100,
					duration: 2,
					ease: 'power1.out',
				},
				'+=0.5'
			);

			timeline.from(
				newsLetterBoxFormRef.current,
				{
					opacity: 0,
					y: 200,
					duration: 2,
					ease: 'power2.out',
				},
				'+=1'
			);
		});

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} className="py-20 bg-orange-50 overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
					<div className="content-left space-y-6">
						<h2 className="text-4xl lg:text-5xl font-bold text-orange-500">
							Solutions sur mesure nées d&apos;une écoute attentive
						</h2>
						<div className="relative">
							<div className="w-32 h-1 bg-orange-400 rounded-full" />
						</div>
					</div>

					<div className="content-right bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
						<div className="relative z-10">
							<p className="text-lg text-orange-800 mb-6">
								Je n&apos;impose pas d&apos;offres toutes faites. J&apos;écoute
								attentivement les besoins de chacun de mes clients. Ensemble,
								nous créons des solutions sur mesure qui répondent parfaitement
								à leurs attentes. Chaque projet est unique, car il repose sur un
								véritable échange et une compréhension mutuelle.
							</p>

							<div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
								<OpenModalButton ref={buttonContactRef} />

								<div ref={socialMediaRef} className="flex items-center gap-6">
									<a
										href="https://instagram.com/CommWow"
										className="text-orange-600 hover:text-orange-700 transition-colors"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-instagram"
										>
											<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
											<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
										</svg>
									</a>
									<a
										href="https://facebook.com/CommWow"
										className="text-orange-600 hover:text-orange-700 transition-colors"
									>
										<Facebook className="w-6 h-6" />
									</a>
									<a
										href="mailto:chloe@commwow.fr"
										className="text-orange-600 hover:text-orange-700 transition-colors"
									>
										<Mail className="w-6 h-6" />
									</a>
								</div>
							</div>
						</div>

						<div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50" />
						<div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-full -ml-12 -mb-12 opacity-50" />
					</div>
				</div>

				<div className="text-center mt-12 newsletter-box">
					<h3
						className="text-2xl font-bold text-orange-600 mb-6"
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
