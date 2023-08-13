import React from 'react';
import Error from 'next/error';
import { getStaticPage, queries } from '@/data';

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

	return <div className="page-error page-content"></div>;
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
