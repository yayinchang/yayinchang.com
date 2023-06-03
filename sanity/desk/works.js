import { CaseIcon, TagIcon } from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const worksMenu = (S, context) => {
	return S.listItem()
		.title('Works')
		.icon(CaseIcon)
		.child(
			S.list()
				.title('Pages')
				.items([
					orderableDocumentListDeskItem({
						title: 'Work',
						type: 'work',
						icon: CaseIcon,
						S,
						context,
					}),
					S.divider(),
					S.listItem()
						.title('Tags')
						.child(S.documentTypeList('tag').title('Tag'))
						.icon(TagIcon),
					S.divider(),
				])
		);
};
