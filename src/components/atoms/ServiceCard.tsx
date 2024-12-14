import React from 'react';
import { ServiceItem } from '@/types/service';

interface ServiceCardProps {
	service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
	return (
		<div className="flex-shrink-0 w-[400px]">
			<div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
				<div className="relative h-[225px] overflow-hidden">
					<img
						src={service.image}
						alt={service.title}
						className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div className="p-6 flex flex-col flex-grow">
					<h3 className="text-xl font-bold text-orange-900 mb-3">
						{service.title}
					</h3>
					<p className="text-orange-700 text-sm leading-relaxed">
						{service.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
