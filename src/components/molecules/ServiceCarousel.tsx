'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ServiceCard } from '@/components/atoms';
import { services } from '@/data/services';

gsap.registerPlugin(Draggable);

const ServiceCarousel = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!carouselRef.current || !containerRef.current) return;

		const carousel = carouselRef.current;
		const items = carousel.children;
		const itemWidth = 400;
		const gap = 32;
		const totalWidth = (itemWidth + gap) * items.length;

		const clonedItems = Array.from(items).map((item) => item.cloneNode(true));
		clonedItems.forEach((item) => carousel.appendChild(item));

		gsap.set(carousel, { x: 0 });

		const createAutoScroll = () => {
			return gsap.to(carousel, {
				x: -totalWidth,
				duration: 60,
				ease: 'linear',
				repeat: -1,
				onRepeat: () => {
					gsap.set(carousel, { x: 0 });
				},
			});
		};

		let autoScroll = createAutoScroll();

		Draggable.create(carousel, {
			type: 'x',
			bounds: {
				minX: -totalWidth,
				maxX: 0,
			},
			onDragStart: () => {
				autoScroll.pause();
			},
			onDragEnd: () => {
				const currentX = gsap.getProperty(carousel, 'x');
				autoScroll.kill();
				setTimeout(() => {
					autoScroll = gsap.to(carousel, {
						x: Number(currentX) - totalWidth,
						duration: 30,
						ease: 'linear',
						repeat: -1,
						onRepeat: () => {
							gsap.set(carousel, { x: 0 });
						},
					});
				}, 1000);
			},
		});

		return () => {
			autoScroll.kill();
		};
	}, []);

	return (
		<div ref={containerRef} className="carousel overflow-hidden">
			<div
				ref={carouselRef}
				className="flex gap-8 cursor-grab active:cursor-grabbing"
			>
				{services.map((service, index) => (
					<ServiceCard key={index} service={service} />
				))}
			</div>
		</div>
	);
};

export default ServiceCarousel;
