import customImage from '../../lib/custom-image';
import { ImageIcon } from '@sanity/icons';

export default {
	title: 'Photo Section',
	name: 'photoSection',
	type: 'object',
	icon: ImageIcon,
	fields: [customImage()],
	preview: {
		select: {
			photo: 'photo',
		},
		prepare({ photo }) {
			return {
				title: 'Photo Section',
				media: photo,
			};
		},
	},
};
