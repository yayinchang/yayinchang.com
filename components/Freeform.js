import React from 'react';
import cx from 'classnames';
import CustomPortableText from '@/components/CustomPortableText';

const Freeform = ({ data, classNames }) => {
	const { maxWidth, textAlign, content } = data;

	return (
		<CustomPortableText
			classNames={cx(maxWidth, textAlign, classNames)}
			blocks={content}
		/>
	);
};

export default Freeform;
