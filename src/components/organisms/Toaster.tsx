'use client';

import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';
import { useToasterStore } from '@/stores';
import { Toast } from '@/components/atoms';

type Props = {
	children: React.ReactNode;
};

function Toaster({ children }: Props) {
	const toasts = useToasterStore((state) => state.toasts);
	const [domReady, setDomReady] = React.useState(false);

	useEffect(() => {
		setDomReady(true);
	}, []);

	return (
		<>
			{domReady &&
				createPortal(
					<div className="absolute top-2 left-0">
						<div className="flex flex-col justify-center items-start">
							{toasts.map((toast) => (
								<Toast key={toast.id} toast={toast} />
							))}
						</div>
					</div>,
					document.getElementById('portal-root') as Element
				)}
			{children}
		</>
	);
}

export default Toaster;
