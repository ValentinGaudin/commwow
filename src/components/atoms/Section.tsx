import React, { forwardRef, PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
	refs: {
		sectionRef: React.Ref<HTMLElement>;
		outerWrapperRef: React.Ref<HTMLDivElement>;
		innerWrapperRef: React.Ref<HTMLDivElement>;
		imageRef?: React.Ref<HTMLDivElement>;
		headingRef?: React.Ref<HTMLHeadingElement>;
	};
	classNames: {
		section: string;
		outerWrapper: string;
		innerWrapper: string;
		image: string;
	};
}>;

const Section = forwardRef<HTMLElement, SectionProps>(
	({ refs, classNames, children }, sectionRef) => {
		return (
			<section ref={sectionRef} className={classNames.section}>
				<div ref={refs.outerWrapperRef} className={classNames.outerWrapper}>
					<div ref={refs.innerWrapperRef} className={classNames.innerWrapper}>
						{/*<div*/}
						{/*	ref={refs.imageRef}*/}
						{/*	className={`bg-cover bg-center ${bgClass} ${classNames.image}`}*/}
						{/*></div>*/}
						{children}
					</div>
				</div>
			</section>
		);
	}
);

// Ajout de displayName pour résoudre l'erreur ESLint
Section.displayName = 'Section';

export default Section;
