import React from 'react';
import { ServiceCarousel } from '@/components/molecules';

const ServicesGrid = () => {
	return (
		<section id="services-grid" className="overflow-hidden py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold  text-orange-900 text-center mb-16">
					Mes services
				</h2>
				<ServiceCarousel />
			</div>
		</section>
	);
};

export default ServicesGrid;
