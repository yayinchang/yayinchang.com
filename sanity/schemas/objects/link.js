export default {
	title: 'Link',
	name: 'link',
	type: 'object',
	fields: [
		{
			title: 'External URL',
			name: 'url',
			type: 'url',
			hidden: ({ parent, value }) => {
				if (!value && parent?.page) {
					return true;
				}
				return false;
			},
		},
		{
			title: 'Internal Page',
			name: 'page',
			type: 'reference',
			to: [{ type: 'homepage' }, { type: 'about' }, { type: 'workIndex' }],
			hidden: ({ parent, value }) => {
				if (!value && parent?.url) {
					return true;
				}
				return false;
			},
		},
		{
			title: 'Is Button',
			name: 'isButton',
			type: 'boolean',
			initialValue: false,
		},
		{
			title: 'Style',
			name: 'style',
			type: 'string',
			options: {
				list: [
					{ title: 'Default', value: '' },
					// add other style here
				],
			},
			initialValue: '',
			hidden: ({ parent }) => !parent?.isButton,
		},
		{
			title: 'Open in new tab',
			name: 'blank',
			type: 'boolean',
			initialValue: false,
		},
	],
};
