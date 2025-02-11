import { NextApiRequest, NextApiResponse } from 'next';

import { ResponseData } from '@/types/api';
import { Contact, ContactSchema, RequestTypeKey } from '@/types/contact';

const matchListRequestType = (requestType: RequestTypeKey) => {
	switch (requestType) {
		case 'visual_identity':
			return 9;
		case 'communication_support':
			return 10;
		case 'packaging':
			return 11;
		case 'social_media':
			return 12;
		case 'partnership':
			return 13;
		case 'other':
			return 14;
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

		const url = 'https://api.brevo.com/v3/contacts';

		const emailData = {
			email: emailValidation.data.email,
			listIds: [matchListRequestType(emailValidation.data.requestType)],
			updateEnabled: true,
		};

		const brevoResponse = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'api-key': `${BREVO_API_KEY}`,
			},
			body: JSON.stringify(emailData),
		});

		if (brevoResponse.status === 201) {
			return response.status(201).json({ message: 'Email sent successfully.' });
		}

		if (brevoResponse.status === 204) {
			return response.status(204).json({ message: 'Email already exists.' });
		}

		return response
			.status(500)
			.json({ message: 'An error occurred during email sending.' });
	} catch (error) {
		return response
			.status(500)
			.json({ message: 'An error occurred during email sending.' });
	}
}
