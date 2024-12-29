import React from 'react';

const NavigationBar = () => {
	return (
		<header>
			<nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
				<div className="logo">
					<h1 className="text-2xl font-bold text-primary">Logo</h1>
				</div>
				<ul className="flex space-x-4">
					<li>
						<a href="#home" className="text-gray-600 hover:text-primary">
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="text-gray-600 hover:text-primary">
							About
						</a>
					</li>
					<li>
						<a href="#services" className="text-gray-600 hover:text-primary">
							Services
						</a>
					</li>
					<li>
						<a href="#contact" className="text-gray-600 hover:text-primary">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavigationBar;
