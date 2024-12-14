import React from 'react';
import Image from 'next/image';

const LeftSide = () => {
	return (
		<div className="md:w-1/2 flex flex-col justify-evenly content-center p-4 lg:p-10 lg:my-32 md:my-10 sm:my-1 space-y-2">
			<h2 className="text-white  sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-barba ">
				Vous & moi
			</h2>
			<div className="text-white">
				<h3 className="font-extrabold text-lg md:text-1xl">
					Approche personnalisée :
				</h3>
				<p className="font-light text-sm sm:text-lg">
					Concentration sur les besoins et objectifs spécifiques des clients
				</p>
			</div>
			<div className="text-white">
				<h3 className="font-extrabold text-lg md:text-1xl">
					Expertise sectorielle :
				</h3>
				<p className="font-light text-sm sm:text-lg">
					Compréhension approfondie des différents secteurs pour des solutions
					adaptées
				</p>
			</div>
			<div className="text-white">
				<h3 className="font-extrabold text-lg md:text-1xl">
					Engagement envers la qualité :
				</h3>
				<p className="font-light text-sm sm:text-lg">
					Priorité à la satisfaction des clients avec des services de haute
					qualité
				</p>
			</div>
			<div className="text-white">
				<h3 className="font-extrabold text-lg md:text-1xl">Objectif :</h3>
				<p className="font-light text-sm sm:text-lg">
					Aider les petites entreprises, artisans et agriculteurs à réussir, en
					ligne et à travers une communication visuelle cohérente
				</p>
			</div>
		</div>
	);
};

const RightSide = () => {
	return (
		<div className="w-1/2 h-1/2 md:h-screen flex justify-around content-center">
			<Image
				src="/images/photo-11.png"
				alt="photo"
				width={500}
				height={400}
				className="h-2/6 md:h-3/6 w-5/6 p-4"
			/>
		</div>
	);
};

const ThirdSection = () => {
	return (
		<div className="w-screen min-h-svh flex flex-wrap md:flex-row flex-col bg-quaternary">
			<LeftSide />
			<RightSide />
		</div>
	);
};

export default ThirdSection;
