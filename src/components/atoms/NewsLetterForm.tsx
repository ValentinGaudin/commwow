'use client';

import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Send } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

import { Newsletter, NewsLetterSchema } from '@/types/contact';
import { useToasterStore } from '@/stores';

const NewsLetterForm = () => {
	const showToast = useToasterStore((state) => state.showToast);
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const initialValues: Newsletter = {
		email: '',
	};

	const onSubmit = async (
		payload: Newsletter,
		{ resetForm }: { resetForm: () => void }
	) => {
		try {
			await fetch('/api/newsletter/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});
			resetForm();
			showToast({
				message: 'Merci ! Vous êtes bien abonné à la newsletter.',
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
			validationSchema={toFormikValidationSchema(NewsLetterSchema)}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className="flex flex-col items-center gap-4 max-w-lg w-full mx-auto p-4 shadow-md rounded-xl bg-white">
					<div className="flex-1 w-full">
						{/* Champ email */}
						<Field
							name="email"
							type="email"
							placeholder="Entrez votre email"
							className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow shadow-sm placeholder-gray-400"
						/>

						<ErrorMessage
							name="email"
							component="p"
							className="text-red-500 text-sm mt-2"
						/>
					</div>
					<div className="flex flex-row">
						<div className="flex-shrink-0">
							<ReCAPTCHA
								sitekey={process.env.APP_RECAPTCHA_SITE_KEY_INVISIBLE!}
								ref={recaptchaRef}
								/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
								onChange={() => recaptchaRef.current?.executeAsync()}
								size="invisible"
								badge="bottomright"
								isolated
							/>
							<ErrorMessage
								name="recaptcha"
								component="p"
								className="text-red-500 text-sm mt-2"
							/>
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all flex items-center gap-2 shadow-md"
						>
							<Send className="w-5 h-5" />
							<span>S&apos;abonner</span>
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default NewsLetterForm;
