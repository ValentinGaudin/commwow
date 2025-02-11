import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-primary/90 text-white text-center text-sm">
			<Link href="/mentions-legales">Mentions légales</Link>

			<div className="mr-2 mt-2">
				<p>
					Made with ❤️ by &nbsp;
					<a
						href="https://www.linkedin.com/in/gaudinvalentin/"
						target="_blank"
						rel="noreferrer"
						className="underline hover:text-orange-200 transition-colors duration-300"
					>
						Valentin Gaudin
					</a>
					&nbsp; &copy; {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
