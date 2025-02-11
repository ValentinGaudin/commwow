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
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'deco-hero': "url('/images/deco-hero.svg')",
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
				black: {
					DEFAULT: '#2f312e',
				},
				gradients: {
					first: '#e4358e',
					second: '#f65e32',
				},
			},
		},
	},
	plugins: [],
};
export default config;
