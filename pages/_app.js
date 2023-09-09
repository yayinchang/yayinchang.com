import '@/styles/scss/index.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '@/lib/ga';
import Layout from '@/layout';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import CursorProvider from '@/context/CursorProvider';
import Cursor from '@/components/Cursor';

function App({ Component, pageProps }) {
	const { data } = pageProps;
	const router = useRouter();
	useScrollRestoration(router, 0);
	useWindowDimensions();

	useEffect(() => {
		const handleRouteChangeComplete = (url) => {
			if (data.site.gaID) {
				ga.pageview(url, data.site.gaID);
			}
		};

		router.events.on('routeChangeComplete', handleRouteChangeComplete);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChangeComplete);
		};
	}, [router, data]);

	if (router.pathname.startsWith('/sanity')) {
		return (
			<>
				<Component {...pageProps} />
				<style global jsx>{`
					body {
						opacity: 1;
					}
				`}</style>
			</>
		);
	}

	return (
		<CursorProvider>
			<Cursor />
			<Layout siteData={data.site} pageData={data.page}>
				<Component {...pageProps} />
			</Layout>
		</CursorProvider>
	);
}

export default App;
