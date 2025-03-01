import React, { HTMLProps } from 'react';
import Image from 'next/image';

const CircleValidIcon = ({
	className,
}: Pick<HTMLProps<HTMLElement>, 'className'>) => {
	return (
		<Image
			loading="lazy"
			src="/images/icon-circle-check.svg"
			width={24}
			height={24}
			alt="icon en forme de cercle avec une icône de validation"
			className={className}
		/>
	);
};

export default CircleValidIcon;
