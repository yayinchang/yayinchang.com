import { settingsMenu } from './desk/settings';
import { pagesMenu } from './desk/pages';
import { menusMenu } from './desk/menus';
import { worksMenu } from './desk/works';

const hiddenDocTypes = (listItem) =>
	![
		'solidColor',
		'menu',
		'tag',
		'workType',

		'work',

		'homepage',
		'about',
		'workIndex',

		'generalSettings',
		'headerSettings',
		'footerSettings',
		'seoSettings',

		'siteSettings',
		'media.tag', // for media plugin
	].includes(listItem.getId());

export default (S, context) =>
	S.list()
		.title('Website')
		.items([
			pagesMenu(S),
			S.divider(),
			worksMenu(S, context),
			S.divider(),
			menusMenu(S),
			S.divider(),
			settingsMenu(S),
			// Filter out docs already defined above
			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);
