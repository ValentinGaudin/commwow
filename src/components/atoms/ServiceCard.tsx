import React from 'react';
import { ServiceItem } from '@/types/service';
import Image from 'next/image';

interface ServiceCardProps {
	service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
	return (
		<div className="flex-shrink-0 w-[300px] group">
			<div className="p-4 bg-background-three bg-cover rounded-2xl overflow-hidden shadow-md transition-shadow h-full flex flex-col">
				<div className="relative h-[225px]">
					<Image
						loading="lazy"
						src={service.image}
						alt={service.alt}
						width={257}
						height={298}
						className="w-full h-full  object-cover rounded-2xl group-hover:scale-105 transform transition-transform duration-300 ease-in-out"
					/>
				</div>
				<div className="p-6 flex flex-col flex-grow">
					<h3 className="text-xl font-bold text-amber-50 drop-shadow-md mb-3 group-hover:scale-105 group-hover:drop-shadow-lg ease-in-out duration-500">
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
