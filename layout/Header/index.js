import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';
import {
	useScroll,
	useMotionValueEvent,
	AnimatePresence,
	motion,
} from 'framer-motion';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import BrandLogo from '@/components/BrandLogo';
import BrandIcon from '@/components/BrandIcon';
import { fadeAnim } from '@/lib/animate';

export default function Header({ data }) {
	const router = useRouter();
	const windows = useWindowDimensions();
	const [isShrink, setIsShrink] = useState(false);
	const { scrollY } = useScroll();
	const logoWidth = 96;

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setIsShrink(latest > 100);
	});

	const headerRef = useCallback(
		(node) => {
			if (node !== null) {
				document.documentElement.style.setProperty(
					'--s-header',
					`${node.getBoundingClientRect().height}px`
				);
			}
		},
		[windows.width]
	);

	return (
		<>
			<header ref={headerRef} className="global-header">
				<div className="header-wrapper">
					<AnimatePresence mode="wait">
						{router.pathname === '/' && (
							<motion.div
								initial="hide"
								animate="show"
								exit="hide"
								variants={fadeAnim}
								transition={fadeAnim.transition}
								className={cx('header-logo-feature p-fill', {
									'is-shrink': isShrink,
								})}
							>
								<BrandLogo />
							</motion.div>
						)}
					</AnimatePresence>

					{router.pathname !== '/' && (
						<Link
							className={cx('header-logo', {
								'is-hide': router.pathname === '/',
							})}
							href="/"
							aria-label="Link to Homepage"
						>
							<BrandLogo />
						</Link>
					)}
				</div>
			</header>

			<style global jsx>{`
				.global-header {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					width: 100%;
					pointer-events: none;
					z-index: 99;
				}

				.header-wrapper {
					position: relative;
					padding: var(--s-gutter-md);
				}

				.header-logo-feature {
					top: var(--s-gutter-md);
					left: var(--s-gutter-md);
					width: calc(100% - var(--s-gutter-md) * 2);
					pointer-events: none;
					transition: width 0.5s;

					&.is-shrink {
						width: ${logoWidth}px;
					}
				}

				.header-logo {
					display: block;
					width: ${logoWidth}px;
					pointer-events: auto;

					&.is-hide {
						opacity: 0;
						pointer-events: none;
					}
				}
			`}</style>
		</>
	);
}
