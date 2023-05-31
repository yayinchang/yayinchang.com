import { useEffect, useState } from 'react';
import Router from 'next/router';

// restore previous scroll position after page change
export default function useScrollRestoration(router, delay) {
	const [restorePosition, setRestorePosition] = useState({});
	const [shouldScrollRestore, setShouldScrollRestore] = useState(false);

	const saveScrollPosition = (url, pos) => {
		setRestorePosition({
			...restorePosition,
			[url]: pos,
		});
	};

	const updateScrollPosition = (url, restore, shouldRestore) => {
		const position = restore[url];

		// if we have a saved position and it's a history change, restore position, otherwise set to 0
		setTimeout(() => {
			requestAnimationFrame(() => {
				window.scrollTo({ top: position && shouldRestore ? position : 0 });
			});
		}, delay + 100);
	};

	const onBeforeUnload = (event) => {
		saveScrollPosition(router.asPath, window.scrollY);
		delete event['returnValue'];
	};

	const onRouteChangeStart = () => {
		saveScrollPosition(router.asPath, window.scrollY);
	};

	const onRouteChangeComplete = (url, { shallow }) => {
		// Bail if we're just changing URL parameters
		if (shallow) return;

		updateScrollPosition(url, restorePosition, shouldScrollRestore);

		// reset if we should restore the scroll position
		setShouldScrollRestore(false);
	};

	useEffect(() => {
		window.history.scrollRestoration = 'manual';

		// save scroll position on route change
		window.addEventListener('beforeunload', onBeforeUnload);
		Router.events.on('routeChangeStart', onRouteChangeStart);

		// restore scroll position after route change completes
		Router.events.on('routeChangeComplete', onRouteChangeComplete);

		// if it's a history change, set to restore scroll position to "true"
		Router.beforePopState((state) => {
			setShouldScrollRestore(true);
			state.options.scroll = false;
			return true;
		});

		return () => {
			window.removeEventListener('beforeunload', onBeforeUnload);
			Router.events.off('routeChangeStart', onRouteChangeStart);
			Router.events.off('routeChangeComplete', onRouteChangeComplete);
			Router.beforePopState(() => true);
		};
	}, [router]);
}
