import React from 'react';

import { NavigationBar } from '@/components/atoms';

const Header = () => {
	return (
		<header className="sticky top-0 z-50 bg-white shadow-sm">
			<NavigationBar />
		</header>
	);
};

export default Header;
