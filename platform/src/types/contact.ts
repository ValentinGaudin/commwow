import { z } from 'zod';

export const ContactSchema = z.object({
	fullname: z.string().min(2, 'Nom trop court'),
	email: z.string().email('Email invalide'),
	requestType: z.enum(['information', 'devis'], {
		required_error: 'Veuillez sélectionner un type de demande',
	}),
	phone: z.string().optional(),
	subject: z.string().min(5, 'Sujet trop court'),
	recaptcha: z.string().min(1, 'Veuillez valider le captcha'),
});

export type Contact = z.infer<typeof ContactSchema>;

export const NewsLetterSchema = z.object({
	email: z.string().email('Email invalid'),
});

export type Newsletter = z.infer<typeof NewsLetterSchema>;
