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
	],
	preview: {
		prepare() {
			return {
				title: 'Footer Settings',
			};
		},
	},
};
