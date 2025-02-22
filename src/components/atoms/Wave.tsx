'use client';

import React, { SVGAttributes } from 'react';

type WaveProps = {
	className?: SVGAttributes<SVGElement>['className'];
	classNamePath?: SVGAttributes<SVGElement>['className'];
};

const Wave = ({ className, classNamePath }: WaveProps) => {
	return (
		<svg className={`overflow-hidden w-full ${className}`} viewBox="0 0 120 19">
			<defs>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="
	           1 10 0 0 0
	           0 1 0 0 0
	           0 0 1 0 0
	           0 0 0 13 -9"
						result="goo"
					/>
				</filter>
			</defs>

			<path
				className={`transition-colors duration-1000 ease-in w-full ${classNamePath}`}
				d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
			/>
		</svg>
	);
};

export default Wave;
