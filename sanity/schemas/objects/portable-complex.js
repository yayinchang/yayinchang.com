import {
	Header1,
	Header2,
	Header3,
	Header4,
	Button,
} from '@/sanity/components/block-renders';

import customImage from '@/sanity/lib/custom-image';

export default {
	title: 'Rich Text',
	name: 'portableTextComplex',
	type: 'array',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [
				{ title: 'Paragraph', value: 'normal' },
				{
					title: 'H1 (mimic)',
					value: 'h1mock',
					component: Header1,
				},
				{
					title: 'H2',
					value: 'h2',
					component: Header2,
				},
				{
					title: 'H2 (mimic)',
					value: 'h2mock',
					component: Header2,
				},
				{
					title: 'H3',
					value: 'h3',
					component: Header3,
				},
				{
					title: 'H3 (mimic)',
					value: 'h3mock',
					component: Header3,
				},
				{
					title: 'H4',
					value: 'h4',
					component: Header4,
				},
				{
					title: 'H4 (mimic)',
					value: 'h4mock',
					component: Header4,
				},
				{ title: 'Quote', value: 'blockquote' },
			],
			lists: [
				{ title: 'Bullet', value: 'bullet' },
				{ title: 'Numbered', value: 'number' },
			],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{ title: 'Code', value: 'code' },
					{
						title: 'Highlight',
						value: 'highlight',
						icon: () => 'H',
					},
				],
				annotations: [
					{
						title: 'Link',
						name: 'link',
						type: 'link',
						component: Button,
					},
				],
			},
		},
		customImage(),
		{
			type: 'horizontalRuler',
		},
	],
};
