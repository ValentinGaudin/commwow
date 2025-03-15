const legalNotices = [
	{
		title: 'Éditeur du site',
		content: [
			'Le site www.commwow.fr est édité par Chloé Lévite, exerçant sous le nom commercial Comm’Wow, micro-entrepreneur immatriculé sous le numéro SIRET 92755002000048.',
			'Adresse : Les Poponnots, 71220 Beaubery',
			'E-mail : chloe@commwow.fr',
			'Directrice de la publication : Chloé Lévite',
		],
	},
	{
		title: 'Hébergement',
		content: [
			'Le site est hébergé par **Vercel Inc. – Vercel International**, dont le siège social est situé à :',
			'Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis',
			'Téléphone : (559) 288-7060',
			'Site web : https://vercel.com',
			'Support : https://vercel.com/contact',
		],
	},
	{
		title: 'Propriété intellectuelle',
		content: [
			'L’ensemble des éléments présents sur ce site (textes, images, graphismes, logo, icônes, etc.) sont la propriété exclusive de Comm’Wow, sauf mention contraire.',
			'Toute reproduction, modification, distribution ou exploitation de ces éléments sans autorisation écrite préalable est strictement interdite et pourra faire l’objet de poursuites judiciaires.',
		],
	},
	{
		title: 'Protection des données personnelles',
		content: [
			'Conformément au Règlement Général sur la Protection des Données (RGPD) et à la Loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression des données vous concernant.',
			"Les données collectées sont conservées pendant une durée maximale de 2 ans et sont destinées exclusivement à l'usage de Comm’Wow.",
			'Pour toute demande relative à vos données personnelles, vous pouvez contacter Comm’Wow par e-mail à chloe@commwow.fr.',
			'Les données collectées via le site (formulaires, cookies, etc.) sont utilisées uniquement à des fins de gestion des demandes et d’amélioration des services. Elles ne sont en aucun cas revendues à des tiers.',
		],
	},
	{
		title: 'Cookies',
		content: [
			'Le site peut utiliser des cookies afin d’améliorer l’expérience utilisateur.',
			'Vous pouvez configurer votre navigateur pour refuser ou limiter l’utilisation des cookies en accédant aux paramètres de confidentialité de votre navigateur.',
			'Le site n’utilise pas de cookies de suivi ou de statistiques. Seuls des cookies strictement nécessaires à son bon fonctionnement peuvent être utilisés.',
		],
	},
	{
		title: 'Responsabilité',
		content: [
			'Comm’Wow met tout en œuvre pour assurer l’exactitude et la mise à jour des informations disponibles sur ce site.',
			'Toutefois, l’éditeur ne peut être tenu responsable d’éventuelles erreurs, omissions ou indisponibilités du site.',
			'L’utilisation des informations présentes sur ce site relève de la seule responsabilité de l’utilisateur.',
			'Comm’Wow ne pourra être tenu responsable de tout dommage direct ou indirect résultant de l’accès ou de l’utilisation du site.',
		],
	},
	{
		title: 'Liens externes',
		content: [
			'Le site peut contenir des liens vers d’autres sites web.',
			'Comm’Wow ne peut être tenu responsable du contenu de ces sites externes ni de leurs politiques de confidentialité.',
		],
	},
	{
		title: 'Droit applicable',
		content: [
			'Les présentes mentions légales sont soumises au droit français.',
			'En cas de litige, et après tentative de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social de Comm’Wow, sauf disposition légale impérative contraire.',
		],
	},
];

const MentionsLegales = () => {
	return (
		<section className="min-h-screen">
			<div>
				<div className="text-black py-12 px-6 h-full">
					<div className="min-h-screen p-6">
						<h1 className="text-4xl font-barba text-primary mb-6">
							Mentions Légales
						</h1>
						<div className="container mx-auto max-w-3xl">
							{legalNotices.map((legalNotice, index) => (
								<details
									key={index}
									className="p-4 rounded-lg shadow-lg mb-3 transition-all duration-300 group group-hover:shadow-2xl bgwh"
								>
									<summary className="font-semibold cursor-pointer text-lg group-hover:text-orange-400 transition-colors">
										{legalNotice.title}
									</summary>
									<div className="mt-2 text-gray-700 ">
										{legalNotice.content.map((item, key) => (
											<p key={key}>
												{item.split(/(https?:\/\/[^\s]+)/g).map((part, k) =>
													part.match(/https?:\/\//) ? (
														<a
															key={k}
															href={part}
															target="_blank"
															rel="noreferrer"
															className="underline hover:text-orange-400 transition-colors duration-300"
														>
															{part}
														</a>
													) : (
														part
													)
												)}
											</p>
										))}
									</div>
								</details>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MentionsLegales;
