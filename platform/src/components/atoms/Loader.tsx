'use client';

import React, { useEffect, useState } from 'react';

type Props = {
	loading: boolean;
};

const Loader = ({ loading }: Props) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (loading) {
			const interval = setInterval(() => {
				setProgress((prev) => {
					if (prev < 100) {
						return prev + 1;
					} else {
						clearInterval(interval);
						return prev;
					}
				});
			}, 50); // Augmente de 1 toutes les 50 ms

			return () => clearInterval(interval);
		} else {
			setProgress(100); // Assurez-vous que le progress soit à 100 si le chargement est terminé
		}
	}, [loading]);

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
			<div className="text-center">
				<div className="text-2xl mb-4">{progress}%</div>
				<div className="w-full max-w-xs h-3 bg-gray-300 rounded-full overflow-hidden">
					<div
						className="h-full bg-green-500 transition-all duration-100"
						style={{ width: `${progress}%` }}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
