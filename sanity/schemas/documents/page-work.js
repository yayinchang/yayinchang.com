import { CaseIcon } from '@sanity/icons';

export default {
	title: 'Work',
	name: 'workIndex',
	type: 'document',
	icon: CaseIcon,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			title: 'URL Slug',
			name: 'slug',
			type: 'slug',
			description: '(required)',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			title: 'SEO / Share Settings',
			name: 'seo',
			type: 'seo',
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Work',
			};
		},
	},
};
