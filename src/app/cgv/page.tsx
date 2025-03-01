import Link from 'next/link';

import { Wave } from '@/components/atoms';

const articles = [
	{
		title: 'Objet',
		content: [
			'Chloé Lévite, sous le nom de Comm’Wow (SIRET 92755002000048), est spécialisée dans la création visuelle et la gestion de la présence en ligne.',
			'La signature du devis constitue une acceptation formelle des CGV et engage les deux parties.',
			'Le client accepte les prestations décrites dans le devis, qui font partie intégrante du contrat.',
			'TVA non applicable : Régime de la franchise en base de TVA (Article 293 B du Code Général des Impôts).',
		],
	},
	{
		title: 'Services',
		content: [
			'Les prestations proposées par Comm’Wow incluent notamment :',
			'- Création de contenu visuel',
			'- Gestion des réseaux sociaux',
			'- Conception de supports visuels',
			'- Autres services : Des prestations sur mesure peuvent être convenues, faisant l’objet d’un devis ou d’un avenant spécifique.',
			'Toute prestation supplémentaire fera l’objet d’un avenant ou d’un nouveau devis signé par les deux parties.',
		],
	},
	{
		title: 'Tarifs',
		content: [
			'Les tarifs des prestations sont détaillés dans le devis et peuvent être ajustés en fonction des services demandés.',
			'- Les prix sont définis dans le devis et peuvent inclure des remises spécifiques.',
			'- Validité des devis : 30 jours à compter de leur émission.',
			'- Révision des tarifs : Un nouveau devis sera soumis en cas de modification.',
			'- Les prix du devis signé sont fixes et non modifiables, sauf accord écrit des deux parties.',
		],
	},
	{
		title: 'Commande / Bon de commande',
		content: [
			'La commande est validée dès l’acceptation des CGV par le client, soit par la signature du devis, soit par l’émission d’un bon de commande.',
			'- Toute modification en cours de projet doit être formalisée par un avenant signé par les deux parties.',
			'- L’avenant doit préciser les nouvelles conditions et le coût associé.',
		],
	},
	{
		title: 'Paiement',
		content: [
			'Les paiements doivent être effectués par virement bancaire.',
			'- Acompte : 20% du montant total à la commande.',
			'- Solde : Le solde restant est dû à la livraison des fichiers finaux et doit être réglé dans un délai de 15 jours à compter de la date de livraison.',
			'- Aucun escompte en cas de paiement anticipé, sauf mention contraire dans le devis.',
			'- Pénalités de retard : 1,5 fois le taux d’intérêt légal (article L.441-6 du Code de commerce).',
			'- Les informations bancaires seront précisées dans le devis.',
		],
	},
	{
		title: 'Collaboration',
		content: [
			'Les parties s’engagent à collaborer activement pour assurer le bon déroulement du projet.',
			'- Le client doit fournir tous les éléments nécessaires dans les délais impartis.',
			'- Les délais de réalisation sont indicatifs et ajustables selon la complexité du projet et la réception des éléments requis.',
			'- Tout retard du client peut entraîner un décalage des délais, sans responsabilité pour Comm’Wow.',
		],
	},
	{
		title: 'Propriété intellectuelle et utilisation des créations',
		content: [
			'Comm’Wow conserve la propriété intellectuelle et les droits d’auteur sur toutes les créations réalisées.',
			'- Cession des droits : Les conditions sont définies dans le devis (exclusivité, étendue, durée).',
			'- Toute utilisation hors du cadre prévu est interdite.',
			'- Les fichiers sources ne sont remis que si prévu dans le devis, avec un contrat spécifique.',
			'- Les maquettes non retenues restent la propriété de Comm’Wow.',
		],
	},
	{
		title: 'Confidentialité',
		content: [
			'Toutes les informations échangées sont strictement confidentielles.',
			'- Chaque partie s’engage à ne pas divulguer ces informations sans accord écrit.',
			'- Durée de confidentialité : 2 ans après la résiliation du contrat.',
			'- Exceptions : Informations publiques ou obligations légales.',
			'- Toute divulgation non autorisée engage la responsabilité de la partie fautive.',
		],
	},
	{
		title: 'Responsabilité',
		content: [
			'Comm’Wow s’engage à réaliser les prestations avec professionnalisme.',
			'- Le client est responsable de la légalité des informations fournies.',
			'- Garantie : Toute non-conformité doit être signalée sous 5 jours après livraison.',
			'- Comm’Wow corrigera les défauts sous 7 jours ouvrés.',
		],
	},
	{
		title: 'Résiliation',
		content: [
			'Le client peut résilier le contrat avec un préavis de 15 jours par écrit.',
			'- Le client doit régler les prestations effectuées jusqu’à la résiliation.',
			'- Comm’Wow peut résilier immédiatement en cas de non-respect des obligations (ex. : non-paiement).',
			'- En cas de force majeure dépassant 30 jours, le contrat peut être résilié sans indemnité.',
		],
	},
	{
		title: 'Droit de rétractation',
		content: [
			'Le client consommateur dispose d’un droit de rétractation de 14 jours (articles L.221-18 et suivants du Code de la consommation).',
			'- Pour l’exercer, il doit notifier Comm’Wow par écrit.',
			'- Exception : Si la prestation commence avant la fin du délai avec l’accord du client, celui-ci renonce à son droit de rétractation (article L.221-28).',
		],
	},
	{
		title: 'Retard / Pénalités',
		content: [
			'Les délais de réalisation sont indicatifs et peuvent être affectés par la complexité du projet ou le retard du client.',
			'- En cas de retard de paiement, des pénalités sont appliquées selon l’article L.441-6 du Code de commerce.',
			'- Une indemnité forfaitaire de 40 € sera due pour frais de recouvrement (article L.441-10).',
			'- Les frais de recouvrement supplémentaires seront à la charge du client.',
		],
	},
	{
		title: 'Limitations de responsabilité',
		content: [
			'Comm’Wow met en œuvre tous les moyens nécessaires pour fournir un travail de qualité.',
			'- Obligation de moyens et non de résultat.',
			'- Aucune garantie sur l’atteinte d’objectifs commerciaux ou la performance marketing.',
			'- Le client est responsable de l’utilisation des créations après livraison.',
			'- Comm’Wow n’est pas responsable des pertes indirectes ou dommages commerciaux.',
		],
	},
	{
		title: 'Incapacité de travail',
		content: [
			'En cas d’incapacité de travail (maladie, accident), Comm’Wow informera le client au plus vite.',
			'- Un report des prestations pourra être convenu.',
			'- Si l’incapacité dépasse 21 jours, le client pourra résilier sans frais.',
			'- Les prestations non réalisées seront remboursées sous 14 jours ouvrés.',
		],
	},
	{
		title: 'Relation entre les parties',
		content: [
			'Comm’Wow agit en tant que prestataire indépendant et peut sous-traiter certaines prestations.',
			'- Le recours à un sous-traitant n’entraîne pas de modification de prix ou de délais, sauf accord du client.',
			'- Aucune exclusivité entre les parties.',
		],
	},
	{
		title: 'Droit applicable et règlement des litiges',
		content: [
			'Les présentes CGV sont régies par le droit français.',
			'- En cas de litige, une solution amiable sera recherchée.',
			'- Si aucun accord n’est trouvé, un médiateur pourra être désigné.',
			'- À défaut de résolution, les tribunaux compétents du siège social de Comm’Wow seront saisis, sauf dispositions contraires.',
		],
	},
];

const Page = () => {
	return (
		<section className="min-h-screen">
			<Wave className={'rotate-180'} classNamePath={'fill-primary'} />
			<Link href={'/'} className="absolute top-0 left-0 z-50">
				<h1 className="font-barba text-md sm:text-2xl md:text-3xl lg:text-4xl text-white p-2">
					C’W
				</h1>
			</Link>
			<div className="text-black py-12 px-6 h-full">
				<div className="min-h-screen p-6">
					<div className="max-w-3xl mx-auto">
						<h1 className="text-4xl font-barba text-primary mb-6">
							Conditions Générales de Vente (CGV)
						</h1>
						<p className="mb-6 text-gray-600">
							Ces CGV régissent les relations entre Comm’Wow et ses clients.
						</p>

						{articles.map((article, index) => (
							<details
								key={index}
								className="p-4 rounded-lg shadow-lg mb-3 transition-all duration-300 group group-hover:shadow-2xl bg-white"
							>
								<summary className="font-semibold cursor-pointer text-lg group-hover:text-orange-400 transition-colors">
									Article {index + 1} - {article.title}
								</summary>
								<div className="mt-2 text-gray-700 ">
									{article.content.map((item, key) => (
										<p key={key}>{item}</p>
									))}
								</div>
							</details>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
