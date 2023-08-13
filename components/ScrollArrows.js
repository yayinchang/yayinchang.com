import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollDown = () => {
	const ref = useRef();

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('svg', {
				keyframes: {
					'0%': { opacity: 0 },
					'50%': { opacity: 1 },
					'100%': { opacity: 0 },
				},
				y: (i) => `+=16 + ${i / 2}`,
				scale: '+=0.4',
				duration: 2.6,
				delay: (i) => 0.2 + i * 0.15,
				repeat: -1,
				ease: 'none',
			});
		}, ref);

		return () => ctx.revert(); // cleanup
	});

	return (
		<>
			<div className="scroll-down cr-gray js-scroll-down" ref={ref}>
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
						opacity: 0;

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
