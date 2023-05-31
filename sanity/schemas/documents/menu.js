import { MenuIcon } from '@sanity/icons';

export default {
	title: 'Menu',
	name: 'menu',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			description: 'required',
			options: {
				source: 'title',
				maxLength: 30,
			},
		},
		{
			title: 'Nav Items',
			name: 'items',
			type: 'array',
			of: [{ type: 'navItem' }, { type: 'navDropdown' }],
		},
	],
	preview: {
		select: {
			title: 'title',
			items: 'items',
		},
		prepare({ title = 'Untitled', items = [] }) {
			return {
				title,
				subtitle: `${items.length} link(s)`,
				media: MenuIcon,
			};
		},
	},
};
