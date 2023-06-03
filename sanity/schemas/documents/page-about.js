import {
	BlockContentIcon,
	StringIcon,
	UlistIcon,
	UserIcon,
} from '@sanity/icons';

const Details = {
	title: 'Details',
	name: 'details',
	type: 'object',
	icon: BlockContentIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: '(required)',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Title Link',
			name: 'titleLink',
			type: 'url',
		},
		{
			title: 'Subtitle',
			name: 'subtitle',
			type: 'text',
			rows: 3,
			description: '(required)',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Date',
			name: 'date',
			type: 'string',
			description: '(required)',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'subtitle',
			data: 'date',
		},
		prepare({ title, subtitle, date }) {
			return {
				title: title,
				subtitle: `${subtitle} | ${date}`,
				media: BlockContentIcon,
			};
		},
	},
};

const Item = {
	title: 'Item',
	name: 'item',
	type: 'object',
	icon: StringIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: '(required)',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: title,
				media: StringIcon,
			};
		},
	},
};

const ListObject = {
	title: 'List',
	name: 'list',
	type: 'object',
	icon: UlistIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Items',
			name: 'items',
			type: 'array',
			of: [Item, Details],
		},
	],
	preview: {
		select: {
			title: 'title',
			items: 'items',
		},
		prepare({ title, items }) {
			const itemNumber = items?.length || 0;

			return {
				title: title,
				subtitle: `${itemNumber} Item${itemNumber > 1 ? 's' : ''}`,
				media: UlistIcon,
			};
		},
	},
};

export default {
	title: 'About',
	name: 'about',
	type: 'document',
	icon: UserIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
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
			title: 'Heading',
			name: 'heading',
			type: 'string',
		},
		{
			title: 'Subheading',
			name: 'subheading',
			type: 'portableTextSimple',
		},
		{
			title: 'Summary',
			name: 'summary',
			type: 'text',
			rows: 5,
		},
		{
			title: 'Brief',
			name: 'brief',
			type: 'array',
			of: [ListObject],
		},
		{
			title: 'Motto',
			name: 'motto',
			type: 'text',
			rows: 5,
		},
		{
			title: 'SEO / Share Settings',
			name: 'seo',
			type: 'seo',
		},
	],
	preview: {
		prepare() {
			return {
				title: 'About',
			};
		},
	},
};
