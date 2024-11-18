'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader } from '@/components/atoms';

export default function Home() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{loading ? (
				<Loader loading={loading} />
			) : (
				<main>
					<section className="w-full flex flex-wrap md:flex-row flex-col">
						<div className="flex justify-center items-center h-1/2 md:h-screen w-full md:w-1/2 bg-ternary">
							<div className="relative flex justify-center items-center h-2/6 md:h-3/6 w-5/6">
								<Image
									src="/images/image-01.png"
									alt="photo"
									width={500}
									height={400}
									className="p-4"
								/>
							</div>
						</div>

						{/*<div className="flex justify-center items-center h-screen w-full md:w-1/2 bg-ternary">*/}
						{/*	<div className="flex justify-center items-center h-3/6 w-5/6 relative">*/}
						{/*		<div className="relative flex justify-center items-center w-full h-5/6 lg:h-full z-10">*/}
						{/*			/!*			<span*!/*/}
						{/*			/!*				className=" bg-transparent before:content-[''] before:absolute before:left-[50%] before:top-0 before:w-1/2 before:h-full before:rounded-t-full before:rounded-b-full before:bg-red-800*!/*/}
						{/*			/!*	after:content-[''] after:absolute after:left-[0%] after:top-0 after:w-1/2 after:h-full after:rounded-b-full after:rounded-t-full after:bg-red-500 after:blur-lg before:blur-lg*!/*/}
						{/*			/!*"*!/*/}
						{/*			/!*			/>*!/*/}
						{/*			<Image*/}
						{/*				src={'/images/image-01.png'}*/}
						{/*				alt={'photo'}*/}
						{/*				className=""*/}
						{/*				width={500}*/}
						{/*				height={500}*/}
						{/*			/>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</div>*/}

						<div className="h-screen w-full md:w-1/2 ">
							<div className="flex flex-col items-center justify-around text-center h-full">
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
										Ensemble, on créée une communication qui vous ressemble et
										qui vous donne des résultats.
									</p>
									<p className="text-black text-xl font-cerebri font-extralight mt-5">
										Mise en valeur de votre entreprise à travers des solutions
										visuelles cohérentes et impactantes, tant pour votre
										présence en ligne que pour vos supports imprimés.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="w-full flex flex-wrap md:flex-row flex-col">
						<div className="h-screen w-full md:w-1/2 flex flex-col items-center justify-center">
							<div>
								<Image
									src="/images/photo-10.png"
									alt="photo"
									width={500}
									height={400}
									className="rounded-3xl"
								/>
							</div>
							<div className="rounded-lg bg-primary w-5/6 p-4">
								<h2 className="text-white text-lg sm:text-xl md:text-1xl font-semibold font-cerebri">
									Pourquoi <span>Comm’ Wow</span>
								</h2>
								<p className="text-white font-cerebri font-light text-sm mt-2">
									L'idée de Comm'Wow est née de ma volonté de combler un vide
									dans le marché de la communication. J’ai constaté que de
									nombreuses petites entreprises, artisans et agriculteurs
									manquent souvent de ressources et de compétences pour gérer
									efficacement leur présence en ligne et pour créer des supports
									imprimés percutants. Cette lacune m'a incitée à créer une
									entreprise qui s'engage à fournir des services de
									communication accessibles, qu'il s'agisse de stratégie
									digitale ou de création de supports imprimés, adaptés aux
									besoins spécifiques de ce public souvent négligé
								</p>
							</div>
						</div>
						<div className="flex justify-center items-center h-screen w-full md:w-1/2 bg-primary">
							<div className="flex flex-col justify-start w-1/2 p-5">
								<h2 className="text-xl sm:text-2xl font-bold text-white py-2 font-cerebri">
									Qui suis-je ?
								</h2>
								<p className="text-white font-cerebri font-light text-sm mt-2">
									Je suis une entrepreneure passionnée par la communication, le
									marketing et le digital. J'apprends continuellement, je
									m'imprègne des secteurs et des domaines pour enrichir mes
									connaissances et fournir des solutions toujours plus adaptées
									à chaque client.
								</p>
								<Image
									className="rounded-3xl"
									src={'/images/photo-7.png'}
									alt={'photo'}
									width={300}
									height={300}
								/>
							</div>
							<div className="flex flex-col justify-start w-1/2 p-5">
								<Image
									className="rounded-3xl"
									src={'/images/photo-9.png'}
									alt={'photo'}
									width={300}
									height={300}
								/>
								<p className="text-white font-cerebri font-light text-sm mt-2">
									Mon objectif principal est d'aider mes clients à établir une
									communication solide et professionnelle, tant en ligne qu'à
									travers des supports imprimés, quel que soit leur domaine
									d'activité ou leur taille. Je crois fermement que chaque
									entreprise mérite d'avoir une voix unique et reconnaissable,
									que ce soit sur les plateformes digitales ou à travers des
									visuels percutants.
								</p>
								<h2 className="text-xl sm:text-2xl font-bold text-white py-2 font-cerebri">
									Mon engagement
								</h2>
							</div>
						</div>
					</section>
				</main>
			)}
		</>
	);
}
