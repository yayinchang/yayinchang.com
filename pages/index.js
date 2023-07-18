import React from 'react';
import { getCustomPages, queries } from '@/data';
import cx from 'classnames';
import BrandTitle from '@/components/BrandTitle';
import ScrollDown from '@/components/ScrollDown';
import CustomPortableText from '@/components/CustomPortableText';
import CustomLink from '@/components/CustomLink';
import theme from '@/styles/theme';

function IndexPage({ data }) {
	const { page, site } = data;
	const { intro, aboutTogglerLabel } = page;

	return (
		<>
			<div className="homepage">
				<section className="homepage-hero f-v f-j-b gap-gutter">
					<h1 className="screen-reader-only">{site.title}</h1>
					<BrandTitle />
					{(intro || aboutTogglerLabel) && (
						<div className="homepage-hero-intro f-v f-a-s gap-8">
							{intro && (
								<CustomPortableText blocks={intro} classNames="cr-white" />
							)}
							{aboutTogglerLabel && (
								<button
									className="btn btn--text js-about-toggler"
									aria-label={`Learn more about ${site.title}`}
								>
									{aboutTogglerLabel}
								</button>
							)}
						</div>
					)}
					<ScrollDown />
				</section>
			</div>
			<style jsx>{`
				.homepage {
					position: relative;

					//min-height: calc((var(--s-vp-height) - var(--s-footer)) * 2);

					&-hero {
						padding: var(--s-gutter-lg);
						min-height: var(--s-vp-height);

						&-title {
							font-size: 13vw;
							font-weight: 600;
							line-height: 1;
							letter-spacing: -0.1rem;
							text-transform: uppercase;
						}
					}
				}
			`}</style>
		</>
	);
}

export async function getStaticProps({ preview = {}, previewData }) {
	const pageData = await getCustomPages(
		`*[_type == "homepage"][0] {
				_type,
				title,
				seo,
				intro[]{
					${queries.ptContent}
				},
				aboutTogglerLabel
			}`,
		{
			active: preview,
			token: previewData?.token,
		}
	);

	return {
		props: {
			preview,
			data: pageData,
		},
		revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
	};
}

export default IndexPage;
