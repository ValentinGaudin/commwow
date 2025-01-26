import React from 'react';

const NavigationBar = () => {
	return (
		<header>
			<nav className="fixed top-0 w-screen z-50 flex justify-center items-center py-2 px-4 lg:py-4 lg:px-8 bg-ternary/90 backdrop-blur shadow-lg">
				<ul className="flex space-x-2 lg:space-x-6 text-white">
					<li>
						<a
							href="#hero"
							className=" transition-colors duration-300 hover:text-primary  font-light text-sm md:text-lg lg:text-xl active:text-red"
						>
							Acceuil
						</a>
					</li>
					<li>
						<a
							href="#about"
							className=" transition-colors duration-300 hover:text-primary  font-light text-sm md:text-lg lg:text-xl"
						>
							A propos
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="transition-colors duration-300 hover:text-primary  font-light text-sm md:text-lg lg:text-xl"
						>
							Réalisations
						</a>
					</li>
					<li>
						<a
							href="#services-grid"
							className="transition-colors duration-300 hover:text-primary  font-light text-sm md:text-lg lg:text-xl"
						>
							Services
						</a>
					</li>
					<li>
						<a
							href="#solutions"
							className="transition-colors duration-300 hover:text-primary  font-light text-sm md:text-lg lg:text-xl"
						>
							Solutions
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className=" transition-colors duration-300 hover:text-primary  font-light text-sm md:text-lg lg:text-xl"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavigationBar;
