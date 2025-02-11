'use client';

import React, { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import gsap from 'gsap';

import { Card, OpenModalButton } from '@/components/atoms';
import { FacebookIcon, InstagramIcon } from '@/components/atoms/icons';

const ContactCard = () => {
	const contactCard = useRef<HTMLDivElement>(null);
	const buttonContactRef = useRef<HTMLButtonElement>(null);
	const socialMediaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: contactCard.current,
					start: 'top bottom',
					end: 'bottom top',
					toggleActions: 'play none none reverse',
				},
			});

			tl.from(contactCard.current, {
				opacity: 0,
				y: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			}).add([
				gsap.from(buttonContactRef.current, {
					opacity: 0,
					y: 50,
					duration: 0.5,
					ease: 'power2.inOut',
				}),
				gsap.from(socialMediaRef.current, {
					opacity: 0,
					y: 50,
					duration: 0.5,
					ease: 'power2.inOut',
				}),
			]);
		});

		return () => ctx.revert();
	}, []);

	return (
		<div id="contact" ref={contactCard} className="px-2 md:px-16 lg:px-32">
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
	);
};

export default ContactCard;
