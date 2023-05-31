import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* <link
						rel="preload"
						href="/fonts/font-noto-sans-tc-regular.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-noto-sans-tc-bold.woff2"
						as="font"
						crossOrigin=""
					/> */}
					<link
						rel="preload"
						href="/fonts/font-poppins-light.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-poppins-light-italic.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-poppins-regular.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-poppins-regular-italic.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-poppins-semibold.woff2"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/font-poppins-semibold-italic.woff2"
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
