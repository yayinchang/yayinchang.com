export default {
	title: 'Footer Settings',
	name: 'footerSettings',
	type: 'document',
	fields: [
		{
			title: 'Site Copyright',
			name: 'siteCopyright',
			type: 'string',
		},
		{
			title: 'Social Links',
			name: 'social',
			type: 'array',
			of: [{ type: 'socialLink' }],
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Footer Settings',
			};
		},
	},
};
