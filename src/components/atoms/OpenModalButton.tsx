'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { useModalStore } from '@/stores';

const OpenModalButton = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
	const { openContactForm } = useModalStore();

	return (
		<button
			{...props}
			ref={ref}
			onClick={(e) => {
				openContactForm();
				if (props.onClick) props.onClick(e);
			}}
			className={`bg-orange-600 text-white  px-4 py-2 rounded hover:bg-primary focus:ring-amber-200/90 hover:text-amber-50 transition-colors duration-300 ${props.className}`}
		>
			Contactez-moi
		</button>
	);
});

OpenModalButton.displayName = 'OpenModalButton';

export default OpenModalButton;
