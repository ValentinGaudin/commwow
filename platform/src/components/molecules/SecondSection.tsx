import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LeftSide = () => {
	const imageRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const image = imageRef.current;
		const text = textRef.current;

		// Animation de l'image
		if (image) {
			gsap.fromTo(
				image,
				{ autoAlpha: 0, scale: 0.8 }, // Départ : invisible et réduit
				{
					autoAlpha: 1,
					scale: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: image,
						start: 'top 80%',
						end: 'top 50%',
						toggleActions: 'play none none reverse',
					},
				}
			);
		}

		// Animation du texte
		if (text) {
			gsap.fromTo(
				text,
				{ autoAlpha: 0 }, // Départ : invisible
				{
					autoAlpha: 1, // Fin : visible
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: text,
						start: 'top 80%',
						end: 'top 50%',
						toggleActions: 'play none none reverse',
					},
				}
			);
		}

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div className="h-screen w-full md:w-1/2 flex flex-col items-center justify-center bg-white ">
			<Image
				ref={imageRef}
				src="/images/photo-10.png"
				alt="photo"
				width={500}
				height={400}
				className={`rounded-3xl transform shadow-xl transition duration-300 hover:scale-105`}
			/>
			<div className="rounded-lg bg-primary w-5/6 p-4">
				<h2
					ref={textRef}
					className="text-white text-lg sm:text-xl md:text-1xl font-semibold font-cerebri"
				>
					Pourquoi <span className="font-barba">Comm’ Wow</span>
				</h2>
				<p className="text-white font-cerebri font-light text-sm mt-2">
					L'idée de Comm'Wow est née de ma volonté de combler un vide dans le
					marché de la communication. J’ai constaté que de nombreuses petites
					entreprises, artisans et agriculteurs manquent souvent de ressources
					et de compétences pour gérer efficacement leur présence en ligne et
					pour créer des supports imprimés percutants. Cette lacune m'a incitée
					à créer une entreprise qui s'engage à fournir des services de
					communication accessibles, qu'il s'agisse de stratégie digitale ou de
					création de supports imprimés, adaptés aux besoins spécifiques de ce
					public souvent négligé
				</p>
			</div>
		</div>
	);
};

const RightSide = () => {
	const imageRef1 = useRef(null); // Référence pour la première image
	const imageRef2 = useRef(null); // Référence pour la deuxième image

	useEffect(() => {
		const image1 = imageRef1.current;
		const image2 = imageRef2.current;

		if (image1) {
			gsap.fromTo(
				image1,
				{ autoAlpha: 0, scale: 0.8 },
				{
					autoAlpha: 1,
					scale: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: image1,
						start: 'top 80%',
						end: 'top 50%',
						toggleActions: 'play none none reverse',
					},
				}
			);
		}

		if (image2) {
			gsap.fromTo(
				image2,
				{ autoAlpha: 0, scale: 0.8 },
				{
					autoAlpha: 1,
					scale: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: image2,
						start: 'top 80%',
						end: 'top 50%',
						toggleActions: 'play none none reverse',
					},
				}
			);
		}

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div className="flex justify-center items-center h-screen w-full md:w-1/2 bg-primary">
			<div className="flex flex-col justify-start w-1/2 p-5">
				<h2 className="text-xl sm:text-2xl font-bold text-white py-2 font-cerebri">
					Qui suis-je ?
				</h2>
				<p className="text-white font-cerebri font-light text-sm mt-2">
					Je suis une entrepreneure passionnée par la communication, le
					marketing et le digital. J'apprends continuellement, je m'imprègne des
					secteurs et des domaines pour enrichir mes connaissances et fournir
					des solutions toujours plus adaptées à chaque client.
				</p>
				<Image
					ref={imageRef1}
					className="rounded-3xl"
					src={'/images/photo-7.png'}
					alt={'photo'}
					width={300}
					height={300}
				/>
			</div>
			<div className="flex flex-col justify-start w-1/2 p-5">
				<Image
					ref={imageRef2}
					className="rounded-3xl"
					src={'/images/photo-9.png'}
					alt={'photo'}
					width={300}
					height={300}
				/>
				<p className="text-white font-cerebri font-light text-sm mt-2">
					Mon objectif principal est d'aider mes clients à établir une
					communication solide et professionnelle, tant en ligne qu'à travers
					des supports imprimés, quel que soit leur domaine d'activité ou leur
					taille. Je crois fermement que chaque entreprise mérite d'avoir une
					voix unique et reconnaissable, que ce soit sur les plateformes
					digitales ou à travers des visuels percutants.
				</p>
				<h2 className="text-xl sm:text-2xl font-bold text-white py-2 font-cerebri">
					Mon engagement
				</h2>
			</div>
		</div>
	);
};

const SecondSection = () => {
	return (
		<div className="w-screen min-h-svh flex flex-wrap md:flex-row flex-col">
			<LeftSide />
			<RightSide />
		</div>
	);
};

export default SecondSection;
