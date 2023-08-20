import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import { getCustomPages, queries } from '@/data';
import { useInView } from 'react-intersection-observer';
import ResizeObserver from 'resize-observer-polyfill';
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useMotionValueEvent,
} from 'framer-motion';
import cx from 'classnames';
import Photo from '@/components/Photo';
import SvgIcons from '@/components/SvgIcons';
import ScrollArrows from '@/components/ScrollArrows';
import theme from '@/styles/theme';
import Link from 'next/link';

const List = ({ data = {} }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0,
	});

	return (
		<>
			<ul
				ref={ref}
				className={cx('about-block-list f-v gap-gutter', {
					'is-animated': inView,
				})}
				data-animate="up"
			>
				{data.map((item, key) => {
					const { title, link, subtitle, date } = item;
					return (
						<li
							key={key}
							className={cx('about-block-item', {
								'f-h f-a-c gap-5 is-detailed': subtitle,
							})}
						>
							{link ? (
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className="about-block-link f-h f-j-s f-a-c gap-2"
								>
									{title}
									<SvgIcons type="link" />
								</a>
							) : (
								title
							)}
							{subtitle && date ? (
								<>
									<span className="divider"></span>
									<span className="f-h gap-3">
										<p className="subtitle">{subtitle}</p>
										<p className="date t-light">{date}</p>
									</span>
								</>
							) : (
								subtitle && (
									<>
										<span className="divider"></span>
										<p className="subtitle">{subtitle}</p>
									</>
								)
							)}
						</li>
					);
				})}
			</ul>

			<style jsx>{`
				.link {
					:global(.icon-link) {
						opacity: 0.5;
						transition: opacity 0.4s;
					}

					@media (hover: hover) {
						&:hover {
							:global(.icon-link) {
								opacity: 1;
							}
						}
					}
				}

				.divider {
					flex: 1;
					min-width: 80px;
					border-top: 1px dotted var(--cr-gray);
					opacity: 0.25;
				}

				.subtitle,
				.date {
					opacity: 0.6;
				}
			`}</style>
		</>
	);
};

const About = ({ data = {} }) => {
	const { page, site } = data;
	const { profileImage, heading, summary, intro } = page;
	const scrollerRef = useRef(null);
	const scrollRef = useRef(null);
	const [scrollRange, setScrollRange] = useState(0);
	const [viewportW, setViewportW] = useState(0);
	const [isScrollEnded, setIsScrollEnded] = useState(false);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0,
	});

	useLayoutEffect(() => {
		scrollerRef && setScrollRange(scrollerRef.current.scrollWidth);
	}, [scrollerRef]);

	const onResize = useCallback((entries) => {
		for (let entry of entries) {
			setViewportW(entry.contentRect.width);
		}
	}, []);

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => onResize(entries));
		resizeObserver.observe(scrollRef.current);
		return () => resizeObserver.disconnect();
	}, [onResize]);

	const { scrollYProgress } = useScroll();
	const transform = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -scrollRange + viewportW * 0.6]
	);
	const physics = { damping: 15, mass: 0.27, stiffness: 55 };
	const spring = useSpring(transform, physics);

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		latest > 0.9 ? setIsScrollEnded(true) : setIsScrollEnded(false);
	});

	return (
		<>
			<div className="about">
				<div className="about-mask">
					<ScrollArrows classNames={cx({ 'is-inactive': isScrollEnded })} />
				</div>

				<motion.section
					ref={scrollerRef}
					style={{ x: spring }}
					className="scroller f-h f-a-c"
				>
					<div className="about-blocks f-h">
						<div
							ref={ref}
							className={cx('about-block f-v gap-gutter-lg is-animated', {
								'is-animated': inView,
							})}
							data-animate="up"
						>
							{profileImage && (
								<Photo
									photo={profileImage}
									isFill={true}
									alt={site.title}
									classNames="profile-image"
								/>
							)}
							<div
								className={cx('w-3 f-v gap-gutter-md', {
									'is-animated': inView,
								})}
								data-animate="up"
							>
								{heading && <h2 className="t-heading-3">{heading}</h2>}
								{summary && <p className="t-body t-wrap">{summary}</p>}
							</div>
						</div>
						{intro.length > 0 &&
							intro.map((list, key) => {
								const { title, items } = list;
								return (
									<div key={key} className="about-block f-v gap-gutter-lg">
										<h3 className="t-heading-3 t-light">{title}</h3>
										{items.length > 0 && <List data={items} />}
									</div>
								);
							})}
					</div>
				</motion.section>
			</div>
			<div ref={scrollRef} style={{ height: scrollRange }} />

			<style jsx>{`
				@keyframes slideIn {
					0% {
						transform: translate3d(100%, 0, 0);
					}

					100% {
						transform: translate3d(0, 0, 0);
					}
				}

				.about {
					position: fixed;
					top: var(--s-gutter);
					bottom: 0;
					left: 0;
					right: 0;
					animation: slideIn 0.8s 0.2s var(--e-inOut-Cubic);

					&-mask {
						position: fixed;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						background: linear-gradient(
							270deg,
							var(--cr-black) 0%,
							transparent 50%
						);
						pointer-events: none;
						z-index: 2;

						:global(.scroll-arrows) {
							transition: opacity 0.4s;
						}
						:global(.scroll-arrows.is-inactive) {
							opacity: 0;
						}
					}

					&-blocks {
						position: relative;
						width: max-content;
						gap: max(15vw, 120px);
						padding: var(--s-gutter-md) min(8vw, 120px);
					}

					&-block {
						flex: 0 0 auto;
					}

					:global(.scroller) {
						height: var(--s-vp-height);
						will-change: transform;
					}

					:global(.profile-image) {
						position: relative;
						width: min(20vw, 360px);
						min-width: 200px;
						filter: grayscale(1);

						&::after {
							content: '';
							display: block;
							padding-top: 100%;
						}
					}
				}
			`}</style>
		</>
	);
};

export async function getStaticProps({ preview = {}, previewData }) {
	const pageData = await getCustomPages(
		`*[_type == "about"][0] {
				_type,
				title,
				seo,
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

export default About;
