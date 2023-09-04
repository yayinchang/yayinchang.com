import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import AnimatedSplitText from '@/components/AnimatedSplitText';
import Photo from '@/components/Photo';

const Work = ({
	data = {},
	hoverEl,
	handelMouseEnter,
	handelMouseLeave,
	mouseX,
	mouseY,
}) => {
	if (!data) return;

	const { _id, title, type, link, coverImage } = data;
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 1,
	});

	return (
		<>
			<div
				ref={ref}
				className={cx('work', {
					'is-animated': inView,
					'is-hovered': hoverEl === _id,
				})}
				onMouseEnter={handelMouseEnter}
				onMouseLeave={handelMouseLeave}
			>
				<div className="work-heading c-4 f-h">
					<h3 className="work-title t-title">
						<AnimatedSplitText>{title}</AnimatedSplitText>
					</h3>
					{type && (
						<p className="work-subtitle t-subtitle">
							<AnimatedSplitText>{type}</AnimatedSplitText>
						</p>
					)}
				</div>
				{coverImage && (
					<div
						className="work-thumbnail mouse-screen-only"
						style={{
							top: `${mouseY + 10}px`,
							left: `${mouseX + 10}px`,
						}}
					>
						<Photo
							photo={coverImage}
							alt={title}
							classNames="thumbnail-photo"
						/>
					</div>
				)}
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Visit ${title}`}
						className="work-link p-fill"
					></a>
				)}
			</div>
			<style jsx>{`
				.work {
					position: relative;

					&:after {
						content: '';
						position: absolute;
						left: 0;
						bottom: 0;
						width: 0%;
						height: 1px;
						background-color: var(--cr-white);
						transition: width 0.6s 0.2s var(--e-inOut-Expo);
					}

					&.is-animated {
						&:after {
							width: 100%;
						}
					}

					&-heading {
						position: relative;
						padding: var(--s-gutter) 0;
					}

					&-title,
					&-subtitle {
						transition: color 0.4s var(--e-inOut-Expo);
						mix-blend-mode: exclusion;
						z-index: 2;
					}

					&-title {
						flex: 0 0 60%;
						padding-right: var(--s-gutter);
					}

					&-subtitle {
						flex: 0 0 40%;
					}

					&-thumbnail {
						position: absolute;
						width: auto;
						height: 0;
						opacity: 0;

						.is-hovered & {
							opacity: 1;
						}

						:global(.thumbnail-photo) {
							width: 40vw;
							z-index: 1;
						}
					}

					&-link {
						z-index: 3;
					}
				}
			`}</style>
		</>
	);
};

const WorkList = ({ data = {} }) => {
	if (!(data.length > 0)) return;

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [hoverEl, setHoverEl] = useState(null);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0,
	});

	const onMouseMove = (event) => {
		const { offsetX: x, offsetY: y } = event;
		setMousePosition({ x, y });
	};

	useEffect(() => {
		document.addEventListener('mousemove', onMouseMove);

		return () => {
			document.removeEventListener('mousemove', onMouseMove);
		};
	});

	const { x, y } = mousePosition;

	return (
		<>
			<section
				ref={ref}
				className={cx('works', {
					'is-animated': inView,
				})}
			>
				<div className="works-labels">
					<div
						className={cx('c-4 f-h', {
							'is-animated': inView,
						})}
						data-animate="up"
					>
						<div className="works-title t-label">Project</div>
						<div className="works-subtitle t-label">Type</div>
					</div>
				</div>
				{data.map((work) => (
					<Work
						key={work._id}
						data={work}
						hoverEl={hoverEl}
						handelMouseEnter={() => setHoverEl(work._id)}
						handelMouseLeave={() => setHoverEl(null)}
						mouseX={x}
						mouseY={y}
					/>
				))}
			</section>
			<style jsx>{`
				.works {
					margin-top: var(--s-gutter-xl);
					width: 100vw;
					overflow: hidden;

					&-labels {
						position: relative;
						padding: var(--s-gutter-sm) 0;

						&::before,
						&:after {
							content: '';
							position: absolute;
							left: 0;
							width: 0%;
							height: 1px;
							background-color: var(--cr-white);
							transition: width 0.6s 0.2s var(--e-inOut-Expo);
						}
						&::before {
							top: 0;
						}
						&:after {
							bottom: 0;
							transition-delay: 0.4s;
						}

						.is-animated & {
							&::before,
							&:after {
								width: 100%;
							}
						}
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

export default WorkList;
