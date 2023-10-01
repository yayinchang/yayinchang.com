import React from 'react';

export default {
	title: 'General Settings',
	name: 'generalSettings',
	type: 'document',
	fields: [
		{
			title: 'Site Title',
			name: 'siteTitle',
			type: 'string',
			description: 'The name of your site, usually your company/brand name',
		},
		{
			title: 'Email',
			name: 'email',
			type: 'string',
		},
		{
			title: 'Email Description',
			name: 'emailDescription',
			type: 'text',
			rows: 2,
		},
		{
			title: 'Social Links',
			name: 'social',
			type: 'array',
			of: [{ type: 'socialLink' }],
		},
		{
			title: 'Live Site URL',
			description: 'The root domain or subdomain of your website',
			name: 'siteURL',
			type: 'url',
		},
	],
	preview: {
		prepare() {
			return {
				title: 'General Settings',
			};
		},
	},
};
