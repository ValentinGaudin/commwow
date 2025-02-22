import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData } from '@/types/api';
import { Contact, ContactSchema, RequestTypeKey } from '@/types/contact';

const matchListRequestType = (requestType: RequestTypeKey): number => {
	switch (requestType) {
		case 'visual_identity':
			return 9;
		case 'communication_support':
			return 10;
		case 'social_media':
			return 12;
		case 'rates':
			return 13;
		case 'other':
			return 14;
		default:
			throw new Error('Invalid request type');
	}
};

const matchTitleRequestType = (requestType: RequestTypeKey): string => {
	switch (requestType) {
		case 'visual_identity':
			return 'Identité visuelle';
		case 'communication_support':
			return 'Support de communication';
		case 'social_media':
			return 'Réseaux sociaux';
		case 'rates':
			return 'Tarifs';
		case 'other':
			return 'Autre';
		default:
			throw new Error('Invalid request type');
	}
};

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse<ResponseData>
) {
	try {
		const data = (await request.body) as Contact;

		const emailValidation = ContactSchema.safeParse(data);

		if (!emailValidation.success) {
			return response.status(422).json({ message: 'Invalid email' });
		}

		const BREVO_API_KEY = process.env.BREVO_API_KEY;
		if (!BREVO_API_KEY) {
			return response
				.status(500)
				.json({ message: 'An error occurred with API KEY.' });
		}

		const contactListId = matchListRequestType(
			emailValidation.data.requestType
		);

		// 🔹 add contact to the list
		const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'api-key': `${BREVO_API_KEY}`,
			},
			body: JSON.stringify({
				prenom: emailValidation.data.firstName,
				nom: emailValidation.data.lastName,
				email: emailValidation.data.email,
				listIds: [contactListId],
				updateEnabled: true,
			}),
		});

		if (![201, 204].includes(contactResponse.status)) {
			return response
				.status(500)
				.json({ message: 'An error occurred during email sending.' });
		}

		const email = await fetch('https://api.brevo.com/v3/smtp/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'api-key': `${BREVO_API_KEY}`,
			},
			body: JSON.stringify({
				templateId: 16,
				to: [{ email: emailValidation.data.email }],
				params: {
					rates:
						emailValidation.data.requestType === 'rates'
							? process.env.RATES + 'tarifs.pdf'
							: '',
				},
			}),
		});

		if (![201, 204].includes(email.status)) {
			return response
				.status(500)
				.json({ message: 'An error occurred during email sending.' });
		}

		// 🔹 Admin notification
		await fetch('https://api.brevo.com/v3/smtp/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'api-key': `${BREVO_API_KEY}`,
			},
			body: JSON.stringify({
				templateId: 19,
				to: [{ email: 'chloe@commwow.fr' }],
				params: {
					name:
						emailValidation.data.firstName +
						' ' +
						emailValidation.data.lastName,
					email: emailValidation.data.email,
					requestType: matchTitleRequestType(emailValidation.data.requestType),
					message: emailValidation.data.message,
				},
			}),
		});

		return response.status(201).json({ message: 'Email sent successfully.' });
	} catch (error) {
		return response
			.status(500)
			.json({ message: 'An error occurred during email sending.' });
	}
}
