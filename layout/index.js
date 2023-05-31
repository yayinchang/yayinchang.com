import React, { useRef } from 'react';
import HeadSEO from '@/components/HeadSeo';
import Script from 'next/script';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Layout = ({ siteData = {}, pageData = {}, schema, children }) => {
	const footerRef = useRef(null);

	return (
		<div className="main-wrapper">
			<HeadSEO site={siteData} page={pageData} schema={schema} />
			{siteData.gaID && (
				<>
					<Script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${siteData.gaID}`}
					/>
					<Script
						id="my-gtag"
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteData.gaID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</>
			)}
			<Header data={siteData.header} />
			<Main footerRef={footerRef} siteData={siteData}>
				{children}
			</Main>
			<Footer ref={footerRef} data={siteData.footer} />
		</div>
	);
};

export default Layout;
