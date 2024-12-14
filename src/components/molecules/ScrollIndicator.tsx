'use client';

import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrollRatio = docHeight > 0 ? scrollTop / docHeight : 0;
			setProgress(scrollRatio);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="fixed right-2 top-1/2 -translate-y-1/2 h-[60vh] w-6 flex items-center z-50">
			<div className="absolute h-full w-[2px] bg-gray-300 left-1/2 -translate-x-1/2 rounded-full">
				<div
					className="absolute w-[2px] bg-orange-500 left-1/2 -translate-x-1/2 origin-top rounded-full transition-all duration-200 ease-out"
					style={{
						height: `${progress * 100}%`,
					}}
				/>
			</div>
		</div>
	);
};

export default ScrollIndicator;
