import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import ReCAPTCHA from 'react-google-recaptcha';
import { Contact, ContactSchema } from '@/types/contact';
import { Send } from 'lucide-react';

type RequestTypeKey = 'information' | 'quote';

const ContactForm = () => {
	const initialValues: Contact = {
		fullname: '',
		email: '',
		requestType: 'information',
		phone: '',
		subject: '',
		recaptcha: '',
	};

	const onSubmit = async (
		payload: ContactFormValues,
		{ resetForm }: { resetForm: () => void }
	) => {
		await fetch('api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={toFormikValidationSchema(ContactSchema)}
			onSubmit={onSubmit}
		>
			{({ setFieldValue, isSubmitting }) => (
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
					<div>
						<label className="block text-sm font-medium text-orange-700">
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

					{/* Objet */}
					<div>
						<label className="block text-sm font-medium text-orange-700">
							Type de demande
						</label>
						<Field
							as="select"
							name="requestType"
							className="mt-1 w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
						>
							<option value="information">Demande d’informations</option>
							<option value="quote">Demande de devis</option>
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
							sitekey={process.env.NEXT_PUBLIC_APP_RECAPTCHA_SITE_KEY!}
							onChange={(token) => setFieldValue('recaptcha', token)}
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
							disabled={isSubmitting}
							className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
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
