import { Button } from '../../components/block-renders';

export default {
	title: 'Portable Text',
	name: 'portableTextSimple',
	type: 'array',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [{ title: 'Paragraph', value: 'normal' }],
			lists: [],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
				],
			},
		},
	],
};
