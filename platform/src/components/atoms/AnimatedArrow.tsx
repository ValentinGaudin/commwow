import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const AnimatedArrow = () => {
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		let scrollTimeout: NodeJS.Timeout;

		const handleScroll = () => {
			setIsScrolling(true);
			clearTimeout(scrollTimeout);

			scrollTimeout = setTimeout(() => {
				setIsScrolling(false);
			}, 3000);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(scrollTimeout);
		};
	}, []);

	useEffect(() => {
		if (isScrolling) {
			gsap.to(arrowRef.current, { opacity: 0, duration: 0.3 });
		} else {
			gsap.to(arrowRef.current, { opacity: 1, duration: 0.5 });
			gsap.to(arrowRef.current, {
				y: -20,
				duration: 0.5,
				repeat: -1,
				yoyo: true,
			});
		}
	}, [isScrolling]);

	return (
		<div
			ref={arrowRef}
			// className="hidden md:block"
			style={{
				position: 'fixed',
				bottom: '20px',
				left: '50%',
				transform: 'translateX(-50%)',
				fontSize: '2rem',
				cursor: 'pointer',
				opacity: 0,
				zIndex: 100,
			}}
		>
			↓
		</div>
	);
};

export default AnimatedArrow;
