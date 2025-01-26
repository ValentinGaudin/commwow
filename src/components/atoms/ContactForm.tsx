'use client';

import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import ReCAPTCHA from 'react-google-recaptcha';
import { Send } from 'lucide-react';

import { Contact, ContactSchema } from '@/types/contact';
import { useModalStore, useToasterStore } from '@/stores';
import { useRecaptcha } from '@/hooks/useRecaptcha';

const ContactForm = () => {
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const { handleCaptchaChange, isVerified } = useRecaptcha({
		captchaRef: recaptchaRef,
		hidden: false,
	});
	const showToast = useToasterStore((state) => state.showToast);
	const { closeContactForm } = useModalStore();

	const initialValues: Contact = {
		fullname: '',
		email: '',
		phone: '',
		requestType: 'visual_identity',
		message: '',
	};

	const onSubmit = async (
		payload: Contact,
		{ resetForm }: { resetForm: () => void }
	) => {
		try {
			await fetch('api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			resetForm();
			recaptchaRef.current?.reset();
			closeContactForm();

			showToast({
				message: 'Votre message a bien été envoyé.',
				type: 'success',
			});
		} catch (e) {
			showToast({
				message: 'Une erreur est survenue, veuillez réessayer.',
				type: 'error',
			});
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={toFormikValidationSchema(ContactSchema)}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className="space-y-6 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
					{/* Nom complet */}
					<div>
						<label className="block text-sm font-medium text-orange-700">
							Nom complet
						</label>
						<Field
							name="fullname"
							type="text"
							className="mt-1 w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
						<ErrorMessage
							name="fullname"
							component="p"
							className="text-red-500 text-sm mt-1"
						/>
					</div>

					{/* Email */}
					<div className="w-full flex justify-evenly space-x-2">
						<div className="w-1/2">
							<label className="w-full block text-sm font-medium text-orange-700">
								Email
							</label>
							<Field
								name="email"
								type="email"
								className="mt-1 w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
							<ErrorMessage
								name="email"
								component="p"
								className="text-red-500 text-sm mt-1"
							/>
						</div>
						<div className="w-1/2">
							{/* Phone */}
							<label className="block text-sm font-medium text-orange-700">
								Téléphone
							</label>
							<Field
								name="phone"
								type="text"
								className="mt-1 w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
							<ErrorMessage
								name="phone"
								component="p"
								className="text-red-500 text-sm mt-1"
							/>
						</div>
					</div>

					{/* Objet */}
					<div>
						<label className="block text-sm font-medium text-orange-700">
							Type de demande
						</label>
						<Field
							name="requestType"
							component="select"
							type="text"
							className="mt-1 w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
						>
							<option value="visual_identity">
								J’ai besoin d’une identité visuelle
							</option>
							<option value="communication_support">
								Je souhaite des supports de communication (flyers, cartes,
								brochures, catalogues, ...)
							</option>
							<option value="packaging">J’ai besoin de packaging</option>
							<option value="social_media">
								J’ai besoin de déveloper ma présence sur les réseaux sociaux
							</option>
							<option value="partnership">
								Je souhaite faire un partenariat
							</option>
							<option value="other">J’ai besoin d’un autre service</option>
						</Field>
						<ErrorMessage
							name="requestType"
							component="p"
							className="text-red-500 text-sm mt-1"
						/>
					</div>

					{/* Message */}
					<div>
						<label className="block text-sm font-medium text-orange-700">
							Message
						</label>
						<Field
							name="message"
							as="textarea"
							rows="5"
							className="mt-1 w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
						<ErrorMessage
							name="message"
							component="p"
							className="text-red-500 text-sm mt-1"
						/>
					</div>

					{/* reCAPTCHA */}
					<div className="flex flex-col items-center gap-4">
						<ReCAPTCHA
							sitekey={process.env.APP_RECAPTCHA_SITE_KEY!}
							ref={recaptchaRef}
							/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
							onChange={handleCaptchaChange}
							isolated
						/>
						<ErrorMessage
							name="recaptcha"
							component="p"
							className="text-red-500 text-sm"
						/>
					</div>

					{/* Bouton de soumission */}
					<div className="flex justify-center">
						<button
							type="submit"
							disabled={isSubmitting || !isVerified}
							className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-orange-500"
						>
							<Send className="w-5 h-5" />
							<span>Envoyer</span>
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
