import { PlugIcon } from '@sanity/icons';

export default {
	title: 'Type',
	name: 'workType',
	type: 'document',
	icon: PlugIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: '(required)',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: title,
				media: PlugIcon,
			};
		},
	},
};
