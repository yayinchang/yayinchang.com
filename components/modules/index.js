import React from 'react';
import dynamic from 'next/dynamic';

const Grid = dynamic(() => import('./Grid'));
const Hero = dynamic(() => import('./Hero'));
const Marquee = dynamic(() => import('./Marquee'));
const PhotoSection = dynamic(() => import('./PhotoSection'));
const Freeform = dynamic(() => import('@/components/Freeform'));

export const Module = ({ index, module }) => {
	const type = module._type;

	switch (type) {
		case 'grid':
			return <Grid index={index} data={module} />;
		case 'hero':
			return <Hero index={index} data={module} />;
		case 'marquee':
			return <Marquee index={index} data={module} />;
		case 'freeform':
			return <Freeform data={module} classNames="content-layout" />;
		case 'photoSection':
			return <PhotoSection index={index} data={module} />;

		default:
			return null;
	}
};
