import {
	orderRankField,
	orderRankOrdering,
} from '@sanity/orderable-document-list';
import { CaseIcon } from '@sanity/icons';
import customImage from '../../lib/custom-image';

// const Logo = ({ ...props }) => {
// 	return {
// 		title: 'Logo',
// 		name: 'Logo',
// 		type: 'object',
// 		options: { collapsible: true },
// 		fieldsets: [
// 			{
// 				name: 'options',
// 				options: { columns: 2 },
// 			},
// 		],
// 		fields: [
// 			customImage({
// 				title: 'Image',
// 				name: 'image',
// 				hasDisplayOptions: false,
// 			}),
// 			{
// 				title: 'Width (px)',
// 				name: 'width',
// 				type: 'number',
// 				fieldset: 'options',
// 				validation: (Rule) =>
// 					Rule.integer()
// 						.positive()
// 						.error('Width must be a positive integer in px'),
// 			},
// 			{
// 				title: 'Height (px)',
// 				name: 'height',
// 				type: 'number',
// 				fieldset: 'options',
// 				validation: (Rule) =>
// 					Rule.integer()
// 						.positive()
// 						.error('Height must be a positive integer in px'),
// 			},
// 		],
// 		...props,
// 	};
// };

export default {
	title: 'Work',
	name: 'work',
	type: 'document',
	icon: CaseIcon,
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: 'work' }),
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: '(required) Used as page title if meta title is unset',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'URL Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			description: '(required)',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Type',
			name: 'type',
			type: 'reference',
			to: [{ type: 'workType' }],
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }],
		},
		{
			title: 'Link',
			name: 'link',
			type: 'url',
		},
		{
			title: 'Overview',
			name: 'overview',
			type: 'text',
			rows: 3,
		},
		customImage({
			title: 'Cover Image',
			name: 'coverImage',
			hasDisplayOptions: false,
		}),
		{
			title: 'Date',
			name: 'date',
			type: 'string',
		},
		{
			title: 'Roles',
			name: 'roles',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			title: 'Links',
			name: 'links',
			type: 'array',
			of: [{ type: 'linkSet' }],
		},
		{
			title: 'Description',
			name: 'description',
			type: 'portableTextSimple',
		},
		{
			title: 'Content',
			name: 'content',
			type: 'portableTextComplex',
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
			logo: 'logo.image.asset',
		},
		prepare({ title = 'Untitled', slug, logo }) {
			const path = `/work/${slug.current}`;
			return {
				title,
				subtitle: slug.current ? path : '(missing slug)',
				media: logo ?? CaseIcon,
			};
		},
	},
};
