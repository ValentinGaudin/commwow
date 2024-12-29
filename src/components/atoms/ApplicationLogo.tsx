import React from 'react';
import Image from 'next/image';

const ApplicationLogo = () => {
	return (
		<Image
			src={'/images/Comm_Wow-logo-1.svg'}
			alt={''}
			width={150}
			height={150}
			className="hover:scale-110 transform transition-transform duration-300 ease-in-out"
		/>
	);
};

export default ApplicationLogo;
