import React, { HTMLProps } from 'react';
import Image from 'next/image';

const CircleExclamationIcon = ({
	className,
}: Pick<HTMLProps<HTMLElement>, 'className'>) => {
	return (
		<Image
			src="/images/icon-circle-exclamation.svg"
			width={24}
			height={24}
			alt={"icône en forme de cercle avec un point d'exclamation à l'intérieur"}
			className={className}
		/>
	);
};

export default CircleExclamationIcon;
