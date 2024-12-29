'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
	const loaderRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const dotsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });

		// Animate the dots
		gsap.to('.dot', {
			y: -10,
			duration: 0.5,
			ease: 'power2.inOut',
			stagger: {
				each: 0.2,
				repeat: -1,
				yoyo: true,
			},
		});

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<div
			ref={loaderRef}
			className="fixed inset-0 bg-orange-50 flex flex-col items-center justify-center z-50"
		>
			<div className="flex items-center gap-1 mt-6">
				<div ref={textRef} className="text-2xl font-bold text-orange-600">
					Comm&apos;Wow
				</div>
				<div ref={dotsRef} className="flex gap-1 ml-1">
					<div className="dot w-2 h-2 bg-orange-600 rounded-full"></div>
					<div className="dot w-2 h-2 bg-orange-600 rounded-full"></div>
					<div className="dot w-2 h-2 bg-orange-600 rounded-full"></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
