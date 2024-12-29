'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Send } from 'lucide-react';
import { Newsletter, NewsLetterSchema } from '@/types/contact';

const NewsLetterForm = () => {
	const initialValues: Newsletter = {
		email: '',
	};

	const onSubmit = async (
		payload: Newsletter,
		{ resetForm }: { resetForm: () => void }
	) => {
		await fetch('/api/newsletter/subscribe', {
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
			validationSchema={toFormikValidationSchema(NewsLetterSchema)}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className="flex flex-col sm:flex-row gap-2 max-w-md">
					<div className="flex-1">
						{/* Champ email */}
						<Field
							name="email"
							type="email"
							placeholder="Votre email"
							className="w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
						/>
						<ErrorMessage
							name="email"
							component="p"
							className="text-red-500 text-sm mt-1"
						/>
					</div>
					<button
						type="submit"
						disabled={isSubmitting}
						className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-secondary focus:ring-blue-500 transition-colors flex items-center gap-2"
					>
						<Send className="w-4 h-4" />
						<span>S&apos;abonner</span>
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default NewsLetterForm;
