import React from 'react';
import Error from 'next/error';
import { getStaticPage, queries } from '@/data';
import { Module } from '@/components/modules';

const NotFoundPage = ({ data }) => {
	const { page } = data || {};
	const { pageMainData } = page || {};

	if (!page) {
		return (
			<Error
				title={`"Error Page (404)" is not set in Sanity, or the page data is missing`}
				statusCode="Data Error"
			/>
		);
	}

	return (
		<div className="page-error page-content">
			<div className="c">
				{pageMainData.modules?.map((module, key) => (
					<Module key={key} index={key} module={module} />
				))}
			</div>
		</div>
	);
};

export async function getStaticProps({ preview, previewData }) {
	const pageData = await getStaticPage(queries.errorID, {
		active: preview,
		token: previewData?.token,
	});

	return {
		props: {
			data: pageData,
		},
		revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
	};
}

export default NotFoundPage;
