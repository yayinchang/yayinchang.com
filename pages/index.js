import React, { useEffect, useState } from 'react';
import { getCustomPages, queries } from '@/data';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import BrandTitle from '@/components/BrandTitle';
import ScrollArrows from '@/components/ScrollArrows';
import CustomPortableText from '@/components/CustomPortableText';
import { About } from '@/components/About';
import theme from '@/styles/theme';

const Hero = ({ data = {}, onClickEvent = null }) => {
	const { page, site } = data;
	const { intro, aboutTogglerLabel } = page;

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
				{(intro || aboutTogglerLabel) && (
					<div
						ref={ref}
						className={cx('homepage-hero-intro f-v f-a-s gap-8', {
							'is-animated': inView,
						})}
						data-animate="up"
					>
						{intro && <CustomPortableText blocks={intro} />}
						{aboutTogglerLabel && (
							<button
								className="btn btn--text"
								aria-label={`Learn more about ${site.title}`}
								onClick={onClickEvent}
							>
								{aboutTogglerLabel}
							</button>
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
						font-size: 16vw;
						font-weight: 300;
						line-height: 1;
						letter-spacing: -0.1rem;
						white-space: nowrap;
					}
				}
			`}</style>
		</>
	);
};

function IndexPage({ data }) {
	const [isAboutTriggered, setIsAboutTriggered] = useState(false);

	const onHandleClick = () => {
		setIsAboutTriggered(!isAboutTriggered);
	};

	useEffect(() => {
		isAboutTriggered
			? document.documentElement.classList.add('is-about-triggered')
			: document.documentElement.classList.remove('is-about-triggered');
	}, [isAboutTriggered]);

	useEffect(() => {
		const handleKeydown = (e) => {
			if (e.key == 'Escape') setIsAboutTriggered(false);
		};

		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	}, []);

	return (
		<div className="homepage">
			<Hero data={data} onClickEvent={onHandleClick} />
			<About
				data={data}
				isActive={isAboutTriggered}
				onClickEvent={onHandleClick}
			/>
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
				aboutTogglerLabel,
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
