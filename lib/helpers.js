import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { imageBuilder } from '@/sanity/lib/image';

/*  ------------------------------ */
/*  Generic helper functions
/*  ------------------------------ */

// reference a previous state after update
export function usePrevious(value) {
	const prev = useRef();

	useEffect(() => {
		prev.current = value;
	});

	return prev.current;
}

// client-side mount
export function useHasMounted() {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return hasMounted;
}

// conditionally wrap a component with another
export const ConditionalWrapper = ({ condition, wrapper, children }) => {
	return condition ? wrapper(children) : children;
};

// simple debounce function
export function debounce(fn, ms) {
	let timer;
	return (_) => {
		clearTimeout(timer);
		timer = setTimeout((_) => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

// delay with promise
export function sleeper(ms) {
	return function (x) {
		return new Promise((resolve) => setTimeout(() => resolve(x), ms));
	};
}

// check if value is unique
export const unique = (value, index, self) => {
	return self.indexOf(value) === index;
};

// see if an object is found in another array of objects
export function hasObject(recs, vals) {
	if (!recs) return false;

	return recs.some(function (obj) {
		for (var x in obj) if (x in vals && obj[x] != vals[x]) return false;
		return true;
	});
}

// keep number counters within a range
export function clampRange(value, min = 0, max = 1) {
	return value < min ? min : value > max ? max : value;
}

// sort ascending
export function sortAsc(arr, field) {
	return arr.sort(function (a, b) {
		if (a[field] > b[field]) {
			return 1;
		}
		if (b[field] > a[field]) {
			return -1;
		}
		return 0;
	});
}

// sort descending
export function sortDesc(arr, field) {
	return arr.sort(function (a, b) {
		if (a[field] > b[field]) {
			return -1;
		}
		if (b[field] > a[field]) {
			return 1;
		}
		return 0;
	});
}

// convert cents to dollars, optional trailing zeros if round amount
export function centsToPrice(cents, trailing = false) {
	const price = cents / 100;

	if (!trailing && price % 1 === 0) {
		return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
	} else {
		const parts = price.toFixed(2).split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return `${parts.join('.')}`;
	}
}

// generate all combos from multiple arrays
export function cartesian(...arrays) {
	return [...arrays].reduce(
		(a, b) =>
			a.map((x) => b.map((y) => x.concat(y))).reduce((a, b) => a.concat(b), []),
		[[]]
	);
}

/*  ------------------------------ */
/*  Client helpers
/*  ------------------------------ */

export const Keys = {
	ENTER: 13,
	SPACE: 32,
	LEFT: 37,
	RIGHT: 39,
	UP: 38,
	DOWN: 40,
};

export const isBrowser = typeof window !== 'undefined';

export function isMobileSafari() {
	if (!isBrowser) return;

	return navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
		navigator.userAgent.match(/AppleWebKit/)
		? true
		: false;
}

export function useWindowSize() {
	function getSize() {
		return {
			width: isBrowser ? window.innerWidth : 0,
			height: isBrowser ? window.innerHeight : 0,
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (!isBrowser) return;

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
}

// use a Portal for overlays
export function InPortal({ id, children }) {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) return null;

	return ReactDOM.createPortal(children, document.querySelector(`#${id}`));
}

export function removeQueryString(url) {
	if (!url.includes('?')) return url;

	const baseUrl = url.split('?');
	return baseUrl[0];
}

/*  ------------------------------ */
/*  Image helpers
/*  ------------------------------ */

export function buildSrc(image, { width, height, format, quality }) {
	let imgSrc = imageBuilder.image(image);

	if (width) {
		imgSrc = imgSrc.width(Math.round(width));
	}

	if (height) {
		imgSrc = imgSrc.height(Math.round(height));
	}

	if (format) {
		imgSrc = imgSrc.format(format);
	}

	if (quality) {
		imgSrc = imgSrc.quality(quality);
	}

	return imgSrc.fit('max').auto('format').url();
}

export function buildSrcSet(image, { srcSizes, aspect, format, quality }) {
	const sizes = srcSizes.map((width) => {
		let imgSrc = buildSrc(image, {
			...{ width },
			height: aspect && Math.round(width * aspect) / 100,
			...{ format },
			...{ quality },
		});

		if (format) {
			imgSrc = imgSrc.format(format);
		}

		return `${imgSrc} ${width}w`;
	});

	return sizes.join(',');
}
