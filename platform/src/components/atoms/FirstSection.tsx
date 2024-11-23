import React from 'react';
import Image from 'next/image';

const LeftSide = () => {
	return (
		<div className="flex justify-center items-center h-1/2 md:h-screen w-full md:w-1/2 bg-ternary">
			<Image
				src="/images/image-01.png"
				alt="photo"
				width={500}
				height={400}
				className="relative flex justify-center items-center h-2/6 md:h-3/6 w-5/6 p-4"
			/>
		</div>
	);
};

const RightSide = () => {
	return (
		<div className="h-screen w-full md:w-1/2 bg-white flex flex-col items-center justify-around text-center h-full">
			<h1 className="text-xl xs:text-3xl sm:text-5xl font-barba font-semibold text-primary">
				Comm’Wow
			</h1>
			<span className="text-primary font-cerebri">_________</span>
			<div>
				<h2 className="text-primary text-xl sm:text-3xl md:text-6xl font-semibold font-cerebri">
					Propulsez
				</h2>
				<h2 className="text-primary text-xl sm:text-3xl md:text-5xl font-light font-cerebri">
					votre image
				</h2>
				<p className="text-primary text-xl sm:text-2xl font-cerebri font-light mt-2">
					avec une communication sur-mesure
				</p>
			</div>
			<div className="mt-10 flex flex-col justify-around items-center w-3/5 px-4">
				<p className="text-primary text-xl sm:text-2xl font-cerebri font-light">
					Ensemble, on créée une communication qui vous ressemble et qui vous
					donne des résultats.
				</p>
				<p className="text-black text-xl font-cerebri font-extralight mt-5">
					Mise en valeur de votre entreprise à travers des solutions visuelles
					cohérentes et impactantes, tant pour votre présence en ligne que pour
					vos supports imprimés.
				</p>
			</div>
		</div>
	);
};

// const FirstSection = () => {
// 	return (
// 		<section className="w-full flex flex-wrap md:flex-row flex-col">
// 			<div className="flex justify-center items-center h-1/2 md:h-screen w-full md:w-1/2 bg-ternary">
// 				<div className="relative flex justify-center items-center h-2/6 md:h-3/6 w-5/6">
// 					<Image
// 						src="/images/image-01.png"
// 						alt="photo"
// 						width={500}
// 						height={400}
// 						className="p-4"
// 					/>
// 				</div>
// 			</div>
//
// 			<div className="flex justify-center items-center h-screen w-full md:w-1/2 bg-ternary">
// 				<div className="flex justify-center items-center h-3/6 w-5/6 relative">
// 					<div className="relative flex justify-center items-center w-full h-5/6 lg:h-full z-10">
// 						{/*			<span*/}
// 						{/*				className=" bg-transparent before:content-[''] before:absolute before:left-[50%] before:top-0 before:w-1/2 before:h-full before:rounded-t-full before:rounded-b-full before:bg-red-800*/}
// 						{/*	after:content-[''] after:absolute after:left-[0%] after:top-0 after:w-1/2 after:h-full after:rounded-b-full after:rounded-t-full after:bg-red-500 after:blur-lg before:blur-lg*/}
// 						{/*"*/}
// 						{/*			/>*/}
// 						<Image
// 							src={'/images/image-01.png'}
// 							alt={'photo'}
// 							className=""
// 							width={500}
// 							height={500}
// 						/>
// 					</div>
// 				</div>
// 			</div>
//
// 			<div className="h-screen w-full md:w-1/2 ">
// 				<div className="flex flex-col items-center justify-around text-center h-full">
// 					<h1 className="text-xl xs:text-3xl sm:text-5xl font-barba font-semibold text-primary">
// 						Comm’Wow
// 					</h1>
// 					<span className="text-primary font-cerebri">_________</span>
// 					<div>
// 						<h2 className="text-primary text-xl sm:text-3xl md:text-6xl font-semibold font-cerebri">
// 							Propulsez
// 						</h2>
// 						<h2 className="text-primary text-xl sm:text-3xl md:text-5xl font-light font-cerebri">
// 							votre image
// 						</h2>
// 						<p className="text-primary text-xl sm:text-2xl font-cerebri font-light mt-2">
// 							avec une communication sur-mesure
// 						</p>
// 					</div>
// 					<div className="mt-10 flex flex-col justify-around items-center w-3/5 px-4">
// 						<p className="text-primary text-xl sm:text-2xl font-cerebri font-light">
// 							Ensemble, on créée une communication qui vous ressemble et qui
// 							vous donne des résultats.
// 						</p>
// 						<p className="text-black text-xl font-cerebri font-extralight mt-5">
// 							Mise en valeur de votre entreprise à travers des solutions
// 							visuelles cohérentes et impactantes, tant pour votre présence en
// 							ligne que pour vos supports imprimés.
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

const FirstSection = () => {
	return (
		<div className="w-full flex flex-wrap md:flex-row flex-col">
			<LeftSide />
			<RightSide />
		</div>
	);
};
export default FirstSection;
