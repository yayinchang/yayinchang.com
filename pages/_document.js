import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preload"
						href="/fonts/font-neue-haas-display-thin.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-neue-haas-display-thin-italic.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-neue-haas-display-light.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-neue-haas-display-light-italic.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-neue-haas-display-roman.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-neue-haas-display-roman-italic.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-neue-haas-display-medium.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-neue-haas-display-medium-italic.woff2"
						as="font"
						crossOrigin=""
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
