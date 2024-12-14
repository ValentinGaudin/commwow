import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'selector',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/images/hero-pattern.svg')",
			},
			fontFamily: {
				sans: ['Flode Neue', 'monospace'],
				barba: ['Barba', 'sans-serif'],
				cerebri: ['Cerebri Sans', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#F65E32',
				},
				secondary: {
					DEFAULT: '#F53358',
				},
				ternary: {
					DEFAULT: '#F5A02E',
				},
				quaternary: {
					DEFAULT: '#B59078',
				},
			},
		},
	},
	plugins: [],
};
export default config;
