import {
	CogIcon,
	EarthGlobeIcon,
	ComponentIcon,
	ControlsIcon,
	InfoFilledIcon,
} from '@sanity/icons';

export const settingsMenu = (S) =>
	S.listItem()
		.title('Settings')
		.icon(CogIcon)
		.child(
			S.list()
				.title('Settings')
				.items([
					S.listItem()
						.title('General')
						.child(
							S.editor()
								.id('generalSettings')
								.schemaType('generalSettings')
								.documentId('generalSettings')
						)
						.icon(EarthGlobeIcon),
					S.divider(),
					S.listItem()
						.title('Colors')
						.child(S.documentTypeList('solidColor').title('Colors'))
						.icon(ControlsIcon),
					S.divider(),
					S.listItem()
						.title('Header')
						.child(
							S.editor()
								.id('headerSettings')
								.schemaType('headerSettings')
								.documentId('headerSettings')
						)
						.icon(ComponentIcon),
					S.listItem()
						.title('Footer')
						.child(
							S.editor()
								.id('footerSettings')
								.schemaType('footerSettings')
								.documentId('footerSettings')
						)
						.icon(ComponentIcon),
					S.divider(),
					S.listItem()
						.title('Default SEO / Share')
						.child(
							S.editor()
								.id('seoSettings')
								.schemaType('seoSettings')
								.documentId('seoSettings')
						)
						.icon(InfoFilledIcon),
				])
		);
