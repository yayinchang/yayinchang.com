import React from 'react';
import { useClient } from 'sanity';
import { Card, Stack, Text } from '@sanity/ui';
import {
	HomeIcon,
	MasterDetailIcon,
	CaseIcon,
	WarningOutlineIcon,
	UserIcon,
} from '@sanity/icons';
import { sanityClient } from '@/sanity/lib/client';

const EmptyNotice = ({ title, type, link, linkTitle }) => {
	if (!title || !type || !link || !linkTitle) return null;

	return (
		<Card padding={4}>
			<Card padding={[5]} radius={2} shadow={1} tone="critical">
				<Stack space={[3]}>
					<Text align="center" size={[2]} weight="semibold">
						The {title} has not been set.
					</Text>
					<Text align="center" size={[2]}>
						Set your {title} from the <a href={link}>{linkTitle}</a>
					</Text>
				</Stack>
			</Card>

			<Stack padding={3} space={[3]}>
				<Text align="center" muted size={[1]}>
					Don't have a {type} yet? Create one now
				</Text>
			</Stack>
		</Card>
	);
};

// Extract our home page
const currentHomePage = (S) => {
	return S.listItem()
		.title('Home Page')
		.icon(HomeIcon)
		.child(async () => {
			const data = await sanityClient.fetch(
				`*[_type == "generalSettings"][0]{ home->{_id} } `
			);

			if (!data?.home) {
				return S.component(() => (
					<EmptyNotice
						title="Home Page"
						type="page"
						link="settings;general"
						linkTitle="General Settings"
					/>
				)).title('Home Page');
			}
			return S.document().id(data.home._id).schemaType('page');
		});
};

// Extract our error page
const currentErrorPage = (S) => {
	return S.listItem()
		.title('Error Page')
		.icon(WarningOutlineIcon)
		.child(async () => {
			const data = await sanityClient.fetch(`
      *[_type == "generalSettings"][0]{
        error->{_id}
      }
    `);

			if (!data?.error) {
				return S.component(() => (
					<EmptyNotice
						title="Error Page"
						type="page"
						link="settings;general"
						linkTitle="General Settings"
					/>
				)).title('Error Page');
			}
			return S.document().id(data.error._id).schemaType('page');
		});
};

export const pagesMenu = (S) => {
	return S.listItem()
		.title('Pages')
		.id('pages')
		.icon(MasterDetailIcon)
		.child(
			S.list()
				.title('Pages')
				.items([
					S.listItem()
						.title('Homepage')
						.child(
							S.editor()
								.id('homepage')
								.schemaType('homepage')
								.documentId('homepage')
						)
						.icon(HomeIcon),
					S.divider(),
					S.listItem()
						.title('About')
						.child(
							S.editor().id('about').schemaType('about').documentId('about')
						)
						.icon(UserIcon),
					S.divider(),
					S.listItem()
						.title('Work')
						.child(
							S.editor()
								.id('workIndex')
								.schemaType('workIndex')
								.documentId('workIndex')
						)
						.icon(CaseIcon),
					S.divider(),
					// S.listItem()
					// 	.title('Other Pages')
					// 	.schemaType('page')
					// 	.child(
					// 		S.documentTypeList('page')
					// 			.title('Other Pages')
					// 			.filter(
					// 				`_type == "page" && !(_id in [
					//       *[_type == "generalSettings"][0].home._ref,
					//       *[_type == "generalSettings"][0].error._ref ])`
					// 			)
					// 			.child((documentId) =>
					// 				S.document().documentId(documentId).schemaType('page')
					// 			)
					// 			.canHandleIntent(
					// 				(intent, { type }) =>
					// 					['create', 'edit'].includes(intent) && type === 'page'
					// 			)
					// 	),
				])
		);
};
