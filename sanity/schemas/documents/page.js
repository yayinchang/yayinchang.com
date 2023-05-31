import React from 'react';
import { MasterDetailIcon } from '@sanity/icons';

export default {
	title: 'Page',
	name: 'page',
	type: 'document',
	icon: MasterDetailIcon,
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
			title: 'Page Modules',
			name: 'modules',
			type: 'array',
			of: [
				{ type: 'grid' },
				{ type: 'hero' },
				{ type: 'freeform' },
				{ type: 'marquee' },
				{ type: 'photoSection' },
			],
		},

		{
			title: 'SEO / Share Settings',
			name: 'seo',
			type: 'seo',
		},
	],
	preview: {
		select: {
			title: 'title',
			slug: 'slug',
		},
		prepare({ title = 'Untitled', slug = {} }) {
			const path = `/${slug.current}`;
			return {
				title,
				subtitle: slug.current ? path : '(missing slug)',
				media: MasterDetailIcon,
			};
		},
	},
};
