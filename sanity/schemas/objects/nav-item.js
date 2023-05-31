import { getStaticRoute, getDynamicRoute } from '../../../lib/routes';
import { LinkIcon, MasterDetailIcon, WarningOutlineIcon } from '@sanity/icons';

export default {
	title: 'Nav Item',
	name: 'navItem',
	type: 'object',
	icon: LinkIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Display Text',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Link',
			name: 'link',
			type: 'link',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
			url: 'link.url',
			pageType: 'link.page._type',
			pageSlug: 'link.page.slug.current',
		},
		prepare({ title, url, pageType, pageSlug }) {
			const isStatic = getStaticRoute(pageType);
			const isDynamic = getDynamicRoute(pageType);
			const page =
				isStatic !== false
					? `/${isStatic}`
					: `${isDynamic ? `/${isDynamic}` : ''}${
							pageSlug ? `/${pageSlug}` : 'Link unset'
					  }`;
			const path = url ? url : page;

			return {
				title: title,
				subtitle: path,
				media:
					url || pageSlug
						? url
							? LinkIcon
							: MasterDetailIcon
						: WarningOutlineIcon,
			};
		},
	},
};
