import { TagIcon } from '@sanity/icons';

export default {
	title: 'Tag',
	name: 'tag',
	type: 'document',
	icon: TagIcon,
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
				media: TagIcon,
			};
		},
	},
};
