import React, { forwardRef, PropsWithChildren } from 'react';

const Card = forwardRef<HTMLDivElement, PropsWithChildren>(
	({ children }, ref) => {
		return (
			<div
				ref={ref}
				className="  bg-white w-full h-full rounded-3xl p-8 shadow-lg relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-linear"
			>
				<div className="relative">{children}</div>

				<div
					className={`absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50`}
				/>
				<div
					className={`absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-full -ml-12 -mb-12 opacity-50`}
				/>
			</div>
		);
	}
);

Card.displayName = 'Card';

export default Card;
