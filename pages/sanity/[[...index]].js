import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import { metadata } from 'next-sanity/studio/metadata';
import { StudioProvider, StudioLayout } from 'sanity';
import config from '@/sanity.config';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle(({ theme }) => ({
	html: { backgroundColor: theme.sanity.color.base.bg },
}));

const faviconIco = '/favicon.ico';
const faviconSvg = '/favicon.svg';
const siteTouchIcon = '/apple-touch-icon.png';
export default function StudioPage() {
	return (
		<>
			<Head>
				<link rel="icon" href={faviconIco} sizes="any" />
				<link preload="true" rel="icon" href={faviconSvg} />
				<link
					preload="true"
					rel="mask-icon"
					href={faviconSvg}
					color="#000000"
				/>
				<link rel="apple-touch-icon" href={siteTouchIcon} />
				{Object.entries(metadata).map(([key, value]) => (
					<meta key={key} name={key} content={value} />
				))}
			</Head>
			<NextStudio config={config}>
				<StudioProvider config={config}>
					<GlobalStyle />
					{/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
					<StudioLayout />
				</StudioProvider>
			</NextStudio>
		</>
	);
}
