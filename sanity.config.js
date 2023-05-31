import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { colorInput } from '@sanity/color-input';
import schemas from '@/sanity/schemas/schema';
import Logo from '@/sanity/branding/Logo';
import deskStructure from '@/sanity/deskStructure';
import { projectId, dataset, previewSecretId, apiVersion } from '@/sanity/env';
import {
	dashboardTool,
	sanityTutorialsWidget,
	projectUsersWidget,
	projectInfoWidget,
} from '@sanity/dashboard';

const singletons = [
	'generalSettings',
	'cookieSettings',
	'promoSettings',
	'headerSettings',
	'footerSettings',
	'seoSettings',
	'media.tag', // for media plugin
];

export default defineConfig({
	basePath: '/sanity',
	title: 'Starter Template',
	projectId,
	dataset,
	plugins: [
		dashboardTool({
			widgets: [
				sanityTutorialsWidget(),
				projectInfoWidget(),
				projectUsersWidget(),
			],
		}),
		deskTool({
			structure: deskStructure,
		}),
		media(),
		visionTool(),
		colorInput(),
	],
	schema: {
		types: schemas,
	},
	document: {
		newDocumentOptions: (prev, { currentUser, creationContext }) => {
			// `prev` is equivalent to `S.defaultInitialValueTemplateItems()`
			if (creationContext.type === 'global') {
				return prev.filter((doc) => !singletons.includes(doc.templateId));
			}

			return prev;
		},
		// Removes the "duplicate" action on the "settings" singleton
		actions: (prev, { schemaType }) => {
			if (schemaType) {
				return prev.filter(({ action }) => action !== 'duplicate');
			}

			return prev;
		},
	},
	studio: {
		components: {
			logo: Logo,
		},
	},
});
