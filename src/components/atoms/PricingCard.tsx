import React from 'react';

type Props = {
	title: string;
	price: string;
	features: string[];
	period?: string;
};

const PricingCard = ({ title, price, features, period }: Props) => {
	return (
		<div className="bg-white w-full max-w-sm">
			<h3 className="text-xl font-bold text-orange-900 mb-2 min-h-[56px]">
				{title}
			</h3>
			<div className="mb-6">
				<span className="text-3xl font-bold text-orange-600">{price}</span>
				{period && <span className="text-orange-600 ml-1">{period}</span>}
			</div>
			<ul className="space-y-3 text-orange-700">
				{features.map((feature, index) => (
					<li key={index} className="flex items-start">
						<span className="mr-2">•</span>
						{feature}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PricingCard;
