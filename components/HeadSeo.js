import React from 'react';
import Head from 'next/head';
import { imageBuilder } from '@/sanity/lib/image';

const HeadSEO = ({ site = {}, page = {}, schema }) => {
	const siteTitle = site.title;
	const siteFavicon = site.seo?.favicon || '/favicon.png';
	const siteTouchIcon = site.seo?.touchIcon;

	const templateTags = [
		{
			tag: '{{page_title}}',
			value: page?.title,
		},
		{
			tag: '{{site_title}}',
			value: siteTitle,
		},
	];

	const metaTitle = replaceTemplateTags(
		page?.seo?.metaTitle
			? page?.seo?.metaTitle
			: page?.title
			? `${page?.title} | ${site.seo?.metaTitle || siteTitle}`
			: site.seo?.metaTitle || siteTitle,
		templateTags
	);

	const metaDesc = page?.seo?.metaDesc || site.seo?.metaDesc;

	const shareTitle = replaceTemplateTags(
		page?.seo?.shareTitle || site.seo?.shareTitle,
		templateTags
	);

	const shareDesc = page?.seo?.shareDesc || site.seo?.shareDesc;
	const shareGraphic =
		page?.seo?.shareGraphic?.asset || site.seo?.shareGraphic?.asset;

	return (
		<Head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="format-detection" content="telephone=no" />

			<link
				href="/favicon-light.png"
				rel="icon"
				media="(prefers-color-scheme: light)"
			/>
			<link
				href="/favicon-dark.png"
				rel="icon"
				media="(prefers-color-scheme: dark)"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

			<link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="" />

			<title>{metaTitle}</title>
			{metaDesc && <meta name="description" content={metaDesc} />}

			{shareTitle && (
				<>
					<meta property="og:title" content={shareTitle} />
					<meta name="twitter:title" content={shareTitle} />
				</>
			)}

			{shareDesc && (
				<>
					<meta property="og:description" content={shareDesc} />
					<meta name="twitter:description" content={shareDesc} />
				</>
			)}

			{shareGraphic && (
				<>
					<meta
						property="og:image"
						content={imageBuilder
							.image(shareGraphic)
							.width(1200)
							.height(630)
							.url()}
					/>
					<meta
						name="twitter:image"
						content={imageBuilder
							.image(shareGraphic)
							.width(1200)
							.height(630)
							.url()}
					/>
				</>
			)}

			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />

			{siteTitle && <meta property="og:site_name" content={siteTitle} />}

			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
				/>
			)}
		</Head>
	);
};

export default HeadSEO;

// replace template tags with values
function replaceTemplateTags(string, templateTags = []) {
	let newString = string;

	templateTags.map((v) => {
		newString = newString?.replace(new RegExp(v.tag, 'g'), v.value);
	});

	return newString;
}
