import React from 'react';
import { getCustomPages, queries } from '@/data';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import BrandTitle from '@/components/BrandTitle';
import ScrollArrows from '@/components/ScrollArrows';
import CustomLink from '@/components/CustomLink';
import CustomPortableText from '@/components/CustomPortableText';
import theme from '@/styles/theme';

const Hero = ({ data = {} }) => {
	const { page, site } = data;
	const { intro, aboutCTA } = page;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0,
	});

	return (
		<>
			<section className="homepage-hero f-v f-j-b gap-gutter">
				<h1 className="homepage-hero-title">
					<BrandTitle>{site.title}</BrandTitle>
				</h1>
				{(intro || aboutCTA) && (
					<div
						ref={ref}
						className={cx('homepage-hero-intro f-v f-a-s gap-8', {
							'is-animated': inView,
						})}
						data-animate="up"
					>
						{intro && <CustomPortableText blocks={intro} />}
						{aboutCTA?.label && (aboutCTA?.link.url || aboutCTA?.link.page) && (
							<CustomLink
								link={aboutCTA.link}
								aria-label={`Learn more about ${site.title}`}
							>
								{aboutCTA.label}
							</CustomLink>
						)}
					</div>
				)}
				<ScrollArrows />
			</section>
			<style jsx>{`
				.homepage-hero {
					position: relative;
					padding: var(--s-gutter-md);
					min-height: var(--s-vp-height);

					&-title {
						font-size: 16.5vw;
						font-weight: 300;
						line-height: 1;
						letter-spacing: -0.1rem;
						white-space: nowrap;
					}

					:global(.portable-text .is-highlighted::before) {
						transition-delay: 0.6s;
					}
				}
			`}</style>
		</>
	);
};

function IndexPage({ data }) {
	return (
		<div className="homepage">
			<Hero data={data} />
		</div>
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
				aboutCTA{
					${queries.linkSet}
				},
				"about": *[_type == "about"][0] {
					profileImage{
						${queries.imageMeta}
					},
					heading,
					summary,
					intro[]{
						title,
						items[]{
							title,
							link,
							subtitle,
							date
						}
					}
				}
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
