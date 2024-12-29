import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData } from '@/types/api';

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse<ResponseData>
) {
	if (request.method !== 'POST') {
		return response.status(405).json({ message: 'Method not allowed' });
	}

	const data = (await request.body) as { token: string };
	const { token } = data;
	const secretKey = process.env.RECAPTCHA_SECRET_KEY;

	if (!token ) {
		return response.status(400).json({ message: 'Token is required' });
	}
	if (!secretKey) {
		return response.status(400).json({ message: 'Secret key is required' });
	}

	try {
		const recaptchaResponse = await fetch(
			`https://www.google.com/recaptcha/api/siteverify`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					secret: secretKey,
					response: token,
				}).toString(),
			}
		);

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const result = await recaptchaResponse.json();

		if (result) {
			return response.status(200).json({ message: 'Successfully verified' });
		} else {
			return response.status(400).json({ message: 'Failed to verify' });
		}
	} catch (error) {
		return response.status(500).json({ message: 'An error occurred' });
	}
}
