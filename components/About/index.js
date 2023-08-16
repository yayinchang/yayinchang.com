import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
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

export const About = ({ data = {}, isActive = false, onClickEvent = null }) => {
	const { page, site } = data;
	const { profileImage, heading, summary, intro } = page.about;
	const scrollContainerRef = useRef(null);
	const scrollRef = useRef(null);
	const [scrollRange, setScrollRange] = useState(0);
	const [viewportW, setViewportW] = useState(0);
	const [isScrollEnded, setIsScrollEnded] = useState(false);

	useEffect(() => {
		scrollRef && setScrollRange(scrollRef.current.scrollWidth * 1.2);
	}, [scrollRef]);

	const onResize = useCallback((entries) => {
		for (let entry of entries) {
			setViewportW(entry.contentRect.width);
		}
	}, []);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => onResize(entries));
		resizeObserver.observe(scrollContainerRef.current);
		return () => resizeObserver.disconnect();
	}, [onResize]);

	const { scrollYProgress } = useScroll();
	const transform = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -scrollRange + viewportW]
	);
	const physics = { damping: 15, mass: 0.25, stiffness: 55 };
	const spring = useSpring(transform, physics);

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		latest > 0.9 ? setIsScrollEnded(true) : setIsScrollEnded(false);
	});

	return (
		<>
			<section className="about bg-black">
				<div className="about-mask f-h f-j-e f-a-c">
					<button
						type="button"
						aria-label="Close About Section"
						className="about-close"
						onClick={onClickEvent}
					></button>
					{site.social?.length > 0 && (
						<>
							<div className="about-social f-v gap-10">
								<Link
									href={`mailto:${data.email}`}
									target="_blank"
									rel="noopener noreferrer"
									className="social-link cr-gray"
									aria-label={`Contact ${data.title} by e-mail`}
								>
									<SvgIcons type="envelope" />
								</Link>
								{site.social.map((link) => {
									return (
										<Link
											key={link._key}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="social-link cr-gray"
											aria-label={`Visit ${data.title}'s ${link.icon}`}
										>
											<SvgIcons type={link.icon} />
										</Link>
									);
								})}
							</div>
							<ScrollArrows classNames={cx({ 'is-inactive': isScrollEnded })} />
						</>
					)}
				</div>
				<div
					ref={scrollContainerRef}
					className="about-scroller"
					style={{ height: scrollRange * 1.5 }}
				>
					<motion.div
						ref={scrollRef}
						style={{ x: spring }}
						className="about-blocks f-h f-a-c"
					>
						<div
							className={cx('about-blocks-wrapper f-h', {
								'is-active': isActive,
							})}
						>
							<div className="about-block f-v gap-gutter-lg">
								{profileImage && (
									<Photo
										photo={profileImage}
										isFill={true}
										alt={site.title}
										classNames="profile-image"
									/>
								)}
								<div className="w-3 f-v gap-gutter-md">
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
											{items.length > 0 && (
												<ul className="about-block-list f-v gap-gutter">
													{items.map((item, key) => {
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
											)}
										</div>
									);
								})}
						</div>
					</motion.div>
				</div>
			</section>
			<style jsx>{`
				.about {
					position: fixed;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					transition: transform 0.6s var(--e-inOut-Quint);
					transform: translate3d(100%, 0, 0);
					overflow: hidden;

					&-close {
						position: absolute;
						top: var(--s-gutter);
						right: var(--s-gutter);
						width: 32px;
						height: 32px;
						opacity: 0.5;
						pointer-events: auto;
						transition: opacity 0.4s;
						z-index: 3;

						&::after,
						&::before {
							content: '';
							display: block;
							position: absolute;
							width: 100%;
							height: 1px;
							background-color: var(--cr-white);
						}
						&::before {
							transform: rotate(45deg);
						}
						&::after {
							transform: rotate(-45deg);
						}

						@media (hover: hover) {
							&:hover {
								opacity: 1;
							}
						}
					}

					&-scroller {
						position: relative;
						will-change: transform;
					}

					:global(.about-blocks) {
						position: relative;
						width: max-content;
						height: var(--s-vp-height);

						.about-blocks-wrapper {
							gap: max(15vw, 120px);
							padding: var(--s-gutter-md) min(8vw, 120px);
						}
					}

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

						.about-social {
							padding: var(--s-gutter-md);
							pointer-events: auto;
						}

						:global(.social-link) {
							width: 20px;
							height: 20px;
							transition: color 0.2s;

							@media (hover: hover) {
								&:hover {
									color: var(--cr-white);
								}
							}
						}

						:global(.scroll-arrows) {
							transform: translate(-20px, 10px) rotate(-90deg);
							transition: opacity 0.4s;
						}
						:global(.scroll-arrows.is-inactive) {
							opacity: 0;
						}
					}

					&-block {
						flex: 0 0 auto;
						opacity: 0;
						transform: translate3d(0, 45px, 0);
						transition: opacity 0.6s, transform 0.6s;

						&:nth-child(1) {
							transition-delay: 0.4s;
						}
						&:nth-child(2) {
							transition-delay: 0.6s;
						}
						&:nth-child(3) {
							transition-delay: 0.8s;
						}
						&:nth-child(4) {
							transition-delay: 1s;
						}
						&:nth-child(5) {
							transition-delay: 1.2s;
						}

						.is-active & {
							opacity: 1;
							transform: translate3d(0, 0, 0);
						}

						&-item {
							&.is-detailed {
								min-width: var(--w-3);
							}
						}

						&-link {
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
							border-top: 1px dotted var(--cr-gray);
							opacity: 0.25;
						}

						.subtitle,
						.date {
							opacity: 0.6;
						}
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
