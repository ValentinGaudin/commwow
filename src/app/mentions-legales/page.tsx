import React from 'react';
import { Wave } from '@/components/atoms';

const Page = () => {
	return (
		<>
			<Wave className={'rotate-180'} classNamePath={'fill-primary'} />
			<section className="text-black py-12 px-6">
				<div className="container mx-auto">
					<h1 className="text-4xl font-barba text-primary mb-6">
						Mentions Légales
					</h1>
					<p className="mb-4 text-ternary">
						Conformément aux dispositions des articles 6-III et 19 de la Loi n°
						2004-575 du 21 juin 2004 pour la Confiance dans l’économie
						numérique, dite L.C.E.N., nous portons à la connaissance des
						utilisateurs et visiteurs du site :
						<strong className="text-secondary">www.commwow.fr</strong> les
						informations suivantes :
					</p>

					<h2 className="text-2xl  text-secondary mt-6 mb-3">
						ÉDITEUR DU SITE
					</h2>
					<p className="mb-4">
						Le site <strong className="text-primary">www.commwow.fr</strong> est
						la propriété exclusive de l’auto-entrepreneuse{' '}
						<strong className="text-secondary">Chloé DUPONT – CommWow</strong>,
						qui l’édite.
					</p>
					<ul className="list-disc pl-6 mb-4 space-y-2">
						<li>
							<strong className="text-ternary">Chloé LÉVITE – CommWow</strong>
						</li>
						<li>Auto-entrepreneuse au capital de 0 €</li>
						<li>
							Mail :{' '}
							<a
								href="mailto:chloe@commwow.fr"
								className="text-secondary hover:text-ternary"
							>
								chloe@commwow.fr
							</a>
						</li>
						<li>
							Adresse : 24 Chemin de Villonne, 38290 SATOLAS-ET-BONCE, FRANCE
						</li>
						<li>
							Immatriculée au Registre du Commerce et des Sociétés de RCS
							*******
						</li>
						<li>Numéro TVA intracommunautaire : FR**********</li>
					</ul>
					<p>
						<strong>La directrice de la publication est</strong> Chloé LÉVITE
						<br />
						Contactez la responsable de la publication :{' '}
						<a
							href="mailto:chloe@commwow.fr"
							className="text-secondary hover:text-ternary"
						>
							chloe@commwow.fr
						</a>
					</p>

					<h2 className="text-2xl  text-secondary mt-6 mb-3">HÉBERGEUR</h2>
					<p className="mb-4">
						L’hébergeur du site est la société{' '}
						<strong className="text-primary">
							Vercel Inc. – Vercel International
						</strong>
						, dont le siège social est situé au{' '}
						<strong className="text-secondary">
							340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
						</strong>
						et joignable au (559) 288-7060.
					</p>

					<h2 className="text-2xl  text-secondary mt-6 mb-3">
						DESCRIPTION DES SERVICES ET DE L’ACCÈS AU SITE
					</h2>
					<p className="mb-4">
						Le site <strong className="text-primary">www.commwow.fr</strong> a
						pour objet de fournir l’ensemble des informations concernant les
						services et les activités de la société. La propriétaire du site
						s’efforce de fournir sur le site des informations aussi précises que
						possible. Toutes les informations énoncées sur le site{' '}
						<strong className="text-secondary">www.commwow.fr</strong> sont
						données à titre indicatif. Celles-ci sont également non exhaustives,
						et sont susceptibles d’évoluer.
					</p>
					<p className="mb-4">
						Le site <strong className="text-primary">www.commwow.fr</strong> est
						normalement accessible, à tout moment, à l’utilisateur. L’éditeur ne
						pourra en aucun cas être tenu responsable des conséquences
						éventuelles de cette indisponibilité sur les activités de
						l’utilisateur.
					</p>

					<h2 className="text-2xl  text-secondary mt-6 mb-3">
						PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS
					</h2>
					<p className="mb-4">
						La propriétaire du site est propriétaire des droits de propriété
						intellectuelle et des droits d’usage sur tous les éléments
						accessibles sur le site, que ce soit les textes, images, graphismes,
						logo, icônes, etc. Toute reproduction, modification, publication,
						adaptation totale ou partielle des éléments du site est interdite,
						sauf autorisation écrite préalable au mail suivant :
						<a
							href="mailto:chloe@commwow.fr"
							className="text-secondary hover:text-ternary"
						>
							chloe@commwow.fr
						</a>
						. Toute exploitation non autorisée sera considérée comme contrefaçon
						et sera poursuivie conformément aux dispositions des articles
						L.335-2 et suivants du Code de Propriété Intellectuelle.
					</p>

					<h2 className="text-2xl  text-secondary mt-6 mb-3">
						COLLECTE DES DONNÉES
					</h2>
					<p className="mb-4">
						Le site <strong className="text-primary">www.commwow.fr</strong>{' '}
						assure à l’utilisateur une collecte et un traitement des données
						personnelles dans le respect de la vie privée conformément à la loi
						n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et
						aux libertés et dans le respect de la règlementation applicable en
						matière de traitement des données à caractère personnel conformément
						au règlement (UE) 2016/679 du Parlement européen et du Conseil du 27
						avril 2016.
					</p>
					<p>
						En vertu de la Règlementation applicable en matière de protection
						des Données à caractère personnel, l’utilisateur dispose d’un droit
						d’accès, de rectification, de suppression et d’opposition de ses
						données personnelles. L’utilisateur peut exercer ce droit en
						envoyant un mail à l’adresse suivante :
						<a
							href="mailto:chloe@commwow.fr"
							className="text-secondary hover:text-ternary"
						>
							chloe@commwow.fr
						</a>
						.
					</p>
				</div>
			</section>
			<Wave classNamePath={'fill-primary'} />
		</>
	);
};

export default Page;
