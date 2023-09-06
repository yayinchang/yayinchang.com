import {
	Header1,
	Header2,
	Header3,
	Highlight,
	TC,
} from '@/sanity/components/block-renders';
import { TranslateIcon, SparkleIcon } from '@sanity/icons';

export default {
	title: 'Portable Text',
	name: 'portableTextSimple',
	type: 'array',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [
				{ title: 'Paragraph', value: 'normal' },
				{
					title: 'H1',
					value: 'h1',
					component: Header1,
				},
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
			],
			lists: [],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{
						title: 'Highlight',
						value: 'highlight',
						icon: SparkleIcon,
						component: Highlight,
					},
					{
						title: 'TC',
						value: 'tc',
						icon: TranslateIcon,
						component: TC,
					},
				],
				annotations: [
					{
						title: 'Link',
						name: 'link',
						type: 'link',
					},
				],
			},
		},
	],
};
