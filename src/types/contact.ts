import { z } from 'zod';

export type RequestTypeKey =
	| 'communication_support'
	| 'social_media'
	| 'visual_identity'
	| 'rates'
	| 'other';

export const ContactSchema = z.object({
	firstName: z.string().min(1, 'Prémom trop court').max(50, 'Nom trop long'),
	lastName: z.string().min(1, 'Nom trop court').max(50, 'Nom trop long'),
	email: z.string().email('Email invalide'),
	phone: z.string().optional(),
	requestType: z.enum(
		[
			'communication_support',
			'social_media',
			'visual_identity',
			'rates',
			'other',
		],
		{ message: 'Type de demande invalide' }
	),
	message: z
		.string()
		.min(10, 'Le message est trop court (min. 10 caractères)')
		.max(500, 'Le message est trop long (max. 500 caractères)'),
});

export type Contact = z.infer<typeof ContactSchema>;

export const NewsLetterSchema = z.object({
	email: z
		.string()
		.email('Email invalid')
		.min(1, { message: 'First Name is required' }),
});

export type Newsletter = z.infer<typeof NewsLetterSchema>;
