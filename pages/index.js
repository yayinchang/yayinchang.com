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

const WorkList = ({ data = {} }) => {
	if (!(data.length > 0)) return;

	return (
		<>
			<section className="works">
				<div className="work-labels">
					<div className="c-4 f-h">
						<div className="work-title t-label">Project</div>
						<div className="work-subtitle t-label">Type</div>
					</div>
				</div>
				{data.map((work) => {
					const { _id, title, type, link } = work;

					return (
						<div key={_id} className="work">
							<div className="work-heading c-4 f-h">
								<h3 className="work-title t-title">{title}</h3>
								{type && <p className="work-subtitle t-subtitle">{type}</p>}
							</div>
							{link && (
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Visit ${title}`}
									className="p-fill"
								></a>
							)}
						</div>
					);
				})}
			</section>
			<style jsx>{`
				.works {
					padding-top: var(--s-gutter-xl);
				}

				.work {
					position: relative;
					border-bottom: 1px solid var(--cr-white);

					&::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 0;
						height: 100%;
						background-color: var(--cr-white);
						transition: width 0.4s var(--e-inOut-Expo);
					}

					@media (hover: hover) {
						&:hover {
							&::before {
								width: 100%;
							}

							.work-title,
							.work-subtitle {
								color: var(--cr-black);
							}
						}
					}

					&-labels {
						border-top: 1px solid var(--cr-white);
						border-bottom: 1px solid var(--cr-white);
						padding: var(--s-gutter-sm) 0;
					}

					&-heading {
						position: relative;
						padding: var(--s-gutter) 0;
					}

					&-title,
					&-subtitle {
						transition: color 0.4s var(--e-inOut-Expo);
					}

					&-title {
						flex: 0 0 60%;
						padding-right: var(--s-gutter);
					}
					&-subtitle {
						flex: 0 0 40%;
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
			<WorkList data={data.page.works} />
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
				'works': *[_type == "work"] | order(orderRank asc) {
					_id,
					title,
					'type': type->title,
					tags[]->{
						_id,
						title
					},
					link
				},
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
