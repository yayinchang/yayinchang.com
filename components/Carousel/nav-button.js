import React from 'react';
import SvgIcons from '@/components/SvgIcons';

export const PrevButton = ({ enabled, onClick }) => (
	<>
		<button
			className="carousel-button carousel-button--prev"
			onClick={onClick}
			aria-label="navigation-prev"
			disabled={!enabled}
		>
			<SvgIcons type="arrow-left" />
		</button>
		<style jsx>{`
			.carousel-button--next {
				margin: var(--s-3) 0 0;
			}
		`}</style>
	</>
);

export const NextButton = ({ enabled, onClick }) => (
	<>
		<button
			className="carousel-button carousel-button--next"
			aria-label="navigation-next"
			onClick={onClick}
			disabled={!enabled}
		>
			<SvgIcons type="arrow-right" />
		</button>
		<style jsx>{`
			.carousel-button--next {
				margin: 0 0 0 var(--s-2);
			}
		`}</style>
	</>
);
