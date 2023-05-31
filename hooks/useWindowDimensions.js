import { useState, useEffect } from 'react';

function getWindowDimensions() {
	if (typeof window === 'undefined') {
		return {
			width: 0,
			height: 0,
		};
	}
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
			document.documentElement.style.setProperty(
				'--s-vp-height',
				`${window.innerHeight}px`
			);
		}

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}
