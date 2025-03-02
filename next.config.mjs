/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		esmExternals: true,
	},
	env: {
		APP_RECAPTCHA_SITE_KEY: process.env.APP_RECAPTCHA_SITE_KEY,
		APP_RECAPTCHA_SECRET_KEY: process.env.APP_RECAPTCHA_SECRET_KEY,
		APP_RECAPTCHA_SITE_KEY_INVISIBLE: process.env.APP_RECAPTCHA_SITE_KEY_INVISIBLE,
		APP_RECAPTCHA_SECRET_KEY_INVISIBLE: process.env.APP_RECAPTCHA_SECRET_KEY_INVISIBLE,
		BREVO_API_KEY: process.env.BREVO_API_KEY,
		URL: process.env.URL,
		DEFAULT_EMAIL_FROM: process.env.DEFAULT_EMAIL_FROM,
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Permissions-Policy",
						value: "geolocation=(), microphone=(), camera=()" // Browsing-Topics supprimé
					}
				]
			}
		];
	}
};

export default nextConfig;
