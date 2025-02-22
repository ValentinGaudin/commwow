import React from 'react';
import Link from 'next/link';

type Props = {
	className?: string;
};

const Footer = ({ className }: Props) => {
	return (
		<footer className={`bg-primary/90 text-white text-center text-sm ${className}`}>
			<div className="flex flex-col md:flex-row justify-center items-center gap-4">
				<Link
					href="/mentions-legales"
					className="hover:underline hover:text-orange-200 transition-colors duration-300"
				>
					Mentions légales
				</Link>
				<Link
					href="/cgv"
					className="hover:underline hover:text-orange-200 transition-colors duration-300"
				>
					Conditions générales de vente
				</Link>
			</div>

			<p className="mt-5">
				Made with ❤️ by{' '}
				<a
					href="https://www.linkedin.com/in/gaudinvalentin/"
					target="_blank"
					rel="noreferrer"
					className="underline hover:text-orange-200 transition-colors duration-300"
				>
					Valentin Gaudin
				</a>{' '}
				&copy; {new Date().getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
