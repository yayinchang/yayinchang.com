import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollDown = () => {
	const ref = useRef();

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.utils.toArray('.js-scroll-down svg').forEach((item, index) => {
				gsap.to(item, {
					keyframes: {
						'0%': { opacity: 0 },
						'50%': { opacity: 1 },
						'100%': { opacity: 0 },
					},
					opacity: 1,
					y: `+=16 + ${index / 2}`,
					scale: '+=0.4',
					duration: 2.6,
					delay: 0.2 + index * 0.15,
					repeat: -1,
					ease: 'none',
				});
			});
		}, ref);

		return () => ctx.revert(); // cleanup
	});

	return (
		<>
			<div className="scroll-down cr-white js-scroll-down" ref={ref}>
				<svg
					width="18"
					height="10"
					viewBox="0 0 18 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17 1L9 9L1 1"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					width="18"
					height="10"
					viewBox="0 0 18 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17 1L9 9L1 1"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					width="18"
					height="10"
					viewBox="0 0 18 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17 1L9 9L1 1"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<style global jsx>{`
				.scroll-down {
					position: absolute;
					bottom: var(--s-gutter);
					right: var(--s-gutter);
					width: 32px;
					height: 64px;

					svg {
						position: absolute;
						top: 50%;
						left: 50%;

						&:first-child {
							transform: translate(-50%, calc(-50% - 20px)) scale(0.4);
						}

						&:nth-child(2) {
							transform: translate(-50%, calc(-50% - 10px)) scale(0.6);
						}

						&:last-child {
							transform: translate(-50%, -50%) scale(0.8);
						}
					}
				}
			`}</style>
		</>
	);
};

export default ScrollDown;
