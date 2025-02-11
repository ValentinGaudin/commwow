import { z } from 'zod';

export type RequestTypeKey =
	| 'visual_identity'
	| 'communication_support'
	| 'packaging'
	| 'social_media'
	| 'partnership'
	| 'other';

export const ContactSchema = z.object({
	fullName: z.string().min(2, 'Nom trop court').max(50, 'Nom trop long'),
	email: z.string().email('Email invalide'),
	phone: z.string().optional(),
	requestType: z.enum(
		[
			'visual_identity',
			'communication_support',
			'packaging',
			'social_media',
			'other',
			'partnership',
		],
		{
			required_error: 'Veuillez sélectionner un type de demande',
		}
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
