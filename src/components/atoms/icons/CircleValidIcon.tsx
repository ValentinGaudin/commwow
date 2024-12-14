import React, { HTMLProps } from 'react';
import Image from 'next/image';

const CircleValidIcon = ({
	className,
}: Pick<HTMLProps<HTMLElement>, 'className'>) => {
	return (
		<Image
			src="/images/icon-circle-check.svg"
			alt={'icon en forme de cercle avec une icône de validation'}
			className={className}
		/>
	);
};

export default CircleValidIcon;
