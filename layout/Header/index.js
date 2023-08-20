import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { removeQueryString } from '@/lib/helpers';
import { domTransitionAnim } from '@/lib/animate';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import BrandLogo from '@/components/BrandLogo';
import Menu from '@/components/Menu';

gsap.registerPlugin(ScrollTrigger);

export default function Header({ data }) {
	const router = useRouter();
	const windows = useWindowDimensions();
	const ref = useRef();

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

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(ref.current, {
				autoAlpha: 1,
				duration: 1,
				ease: 'power2',
			});

			if (router.pathname === '/') {
				gsap.set(ref.current, {
					pointerEvents: 'none',
				});

				gsap.set('.js-brand-logo', {
					autoAlpha: 0.05,
					x: '-12vw',
					y: '5vw',
					width: '50vw',
					height: '50vw',
					pointerEvents: 'none',
				});

				gsap.to('.js-brand-logo', {
					x: 0,
					y: 0,
					width: '40px',
					height: '40px',
					duration: 1,
					ease: 'power2.Out',
					scrollTrigger: {
						trigger: ref.current,
						start: 'top top',
						end: () => '+=' + window.innerHeight,
						scrub: true,
					},
				});
			}
		});

		return () => ctx.revert(); // cleanup
	}, [router]);

	return (
		<>
			<header
				key={removeQueryString(router.asPath)}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={domTransitionAnim.transition}
				variants={domTransitionAnim}
				ref={headerRef}
				className="global-header"
			>
				<div ref={ref} className="main-header c f-h f-a-c">
					<BrandLogo />
					{data?.menu?.items && (
						<Menu
							items={data.menu.items}
							classNames="head-menu f-h f-a-c gap-5"
						/>
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

				.main-header {
					padding: var(--s-gutter) 0;
					opacity: 0;
					transition: opacity 0.2s;

					.menu-link {
						color: var(--cr-gray);
						transition: color 0.2s;

						@media (hover: hover) {
							&:hover {
								color: var(--cr-white);
							}
						}
					}
				}
			`}</style>
		</>
	);
}
