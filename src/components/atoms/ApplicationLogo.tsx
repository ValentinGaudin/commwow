import React from 'react';
import Image from 'next/image';

const ApplicationLogo = () => {
	return (
		<Image
			src={'/images/Comm_Wow-logo-4.svg'}
			alt={''}
			width={150}
			height={150}
			className={`cursor-pointer`}
		/>
	);
};

export default ApplicationLogo;
