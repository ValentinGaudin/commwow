import React from 'react';
import { ServiceCarousel } from '@/components/molecules';

const ServiceGrid = () => {
	return (
		<section id="services-grid" className="bg-white overflow-hidden py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-orange-900 text-center mb-16">
					Nos Services Complets
				</h2>
				<ServiceCarousel />
			</div>
		</section>
	);
};

export default ServiceGrid;
