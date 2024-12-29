/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		esmExternals: true,
	},
	env: {
		APP_RECAPTCHA_SITE_KEY: process.env.APP_RECAPTCHA_SITE_KEY,
		APP_RECAPTCHA_SECRET_KEY: process.env.APP_RECAPTCHA_SECRET_KEY,
		BREVO_API_KEY: process.env.BREVO_API_KEY,
	}
};

export default nextConfig;
