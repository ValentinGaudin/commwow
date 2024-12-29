import React from 'react';
import { ServiceItem } from '@/types/service';
import Image from 'next/image';

interface ServiceCardProps {
	service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
	return (
		<div className="flex-shrink-0 w-[400px]">
			<div className="p-8 bg-gradient-to-b from-primary/90 to-primary/90 rounded-2xl overflow-hidden shadow-md  hover:shadow-xl transition-shadow h-full flex flex-col">
				<div className="relative h-[225px] overflow-hidden">
					<Image
						src={service.image}
						alt={service.title}
						width={257}
						height={298}
						className="w-full h-full object-cover transform hover:scale-105 hover:rounded-2xl transition-transform duration-300 rounded-2xl"
					/>
				</div>
				<div className="p-6 flex flex-col flex-grow">
					<h3 className="text-xl font-bold text-amber-50 mb-3">
						{service.title}
					</h3>
					<p className="text-amber-50 text-sm leading-relaxed">
						{service.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
