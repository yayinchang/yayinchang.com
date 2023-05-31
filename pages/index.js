import { getStaticPage, queries } from '@/data';
import Error from 'next/error';
import { Module } from '@/components/modules';
import Link from 'next/link';

function IndexPage({ data }) {
	const { page, site } = data;

	if (!page) {
		return (
			<Error
				title={
					<Link
						href="http://localhost:3333/sanity/desk/pages;homePage"
						target="_blank"
					>
						Go settings
					</Link>
				}
				statusCode="Home Page is not set in Sanity"
			/>
		);
	}

	return (
		<>
			<div className="home-page page-content ">
				<div className="c">
					{page.pageMainData.modules?.map((module, key) => (
						<Module key={key} index={key} module={module} />
					))}
				</div>
			</div>
			<style jsx>{`
				.general-page {
					padding-top: var(--s-header);
				}
			`}</style>
		</>
	);
}

export async function getStaticProps({ preview = {}, previewData }) {
	const pageData = await getStaticPage(queries.homeID, {
		active: preview,
		token: previewData?.token,
	});

	return {
		props: {
			preview,
			data: pageData,
		},
		revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
	};
}

export default IndexPage;
