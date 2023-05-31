import React from 'react';
import Photo from '@/components/Photo';

const PhotoSection = ({ data = {} }) => {
	const { photo } = data;

	if (!photo) return null;

	return (
		<section className="photo-section">
			<Photo photo={photo} srcSizes={[800, 1000, 1200, 1600]} />
		</section>
	);
};

export default PhotoSection;
