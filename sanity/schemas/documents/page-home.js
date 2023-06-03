import { HomeIcon } from '@sanity/icons';

export default {
	title: 'Homepage',
	name: 'homepage',
	type: 'document',
	icon: HomeIcon,
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
			title: 'Label',
			name: 'label',
			type: 'string',
		},
		{
			title: 'Introduction',
			name: 'intro',
			type: 'portableTextSimple',
		},
		{
			title: 'Recent Work',
			name: 'recentWork',
			type: 'object',
			fields: [
				{
					title: 'Label',
					name: 'label',
					type: 'string',
				},
				{
					title: 'Items',
					name: 'items',
					type: 'array',
					of: [{ type: 'work' }],
				},
				{
					title: 'CTA',
					name: 'cta',
					type: 'linkSet',
				},
			],
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
				title: 'Homepage',
			};
		},
	},
};
