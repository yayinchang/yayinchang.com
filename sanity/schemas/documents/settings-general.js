import React from 'react';

export default {
	title: 'General Settings',
	name: 'generalSettings',
	type: 'document',
	// __experimental_actions: ['update', 'publish'], // disable for initial publish
	fields: [
		{
			title: 'Home Page',
			name: 'home',
			type: 'reference',
			to: [{ type: 'homepage' }],
			description: 'This page will show at the root of your domain',
		},
		// {
		// 	title: 'Error Page (404)',
		// 	name: 'error',
		// 	type: 'reference',
		// 	to: [{ type: 'page' }],
		// 	description:
		// 		'This page will show for any URL at your domain that does not exist yet',
		// },
		{
			title: 'Site Title',
			name: 'siteTitle',
			type: 'string',
			description: 'The name of your site, usually your company/brand name',
		},
		{
			title: 'Live Site URL',
			description: 'The root domain or subdomain of your website',
			name: 'siteURL',
			type: 'url',
		},
		{
			title: 'Google Tag Manager (GA)',
			description: 'To enable GA enter your Container ID',
			name: 'gaID',
			type: 'string',
		},
		{
			title: 'Google Tag Manager (GTM)',
			description: 'To enable GTM enter your Container ID',
			name: 'gtmID',
			type: 'string',
		},
		{
			title: 'Klaviyo Site ID (Public API Key)',
			description: 'For product waitlist and newsletter forms',
			name: 'klaviyoAccountID',
			type: 'string',
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
