import React from 'react';
import cx from 'classnames';
import CustomLink from '@/components/CustomLink';
import { PortableText } from '@portabletext/react';
import Photo from '@/components/Photo';
import theme from '@/styles/theme';

const myPortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
		h1: ({ children }) => <h1 className="t-heading-1">{children}</h1>,
		h1mock: ({ children }) => <p className="t-heading-1">{children}</p>,
		h2: ({ children }) => <h2 className="t-heading-2">{children}</h2>,
		h2mock: ({ children }) => <p className="t-heading-2">{children}</p>,
		h3: ({ children }) => <h3 className="t-heading-3">{children}</h3>,
		h3mock: ({ children }) => <p className="t-heading-3">{children}</p>,
	},
	list: {
		bullet: ({ children }) => <ul>{children}</ul>,
		number: ({ children }) => <ol>{children}</ol>,
	},
	types: {
		horizontalRuler: () => <hr />,
		photo: (data) => {
			const { value } = data;
			return <Photo photo={value} />;
		},
	},
	marks: {
		highlight: ({ children }) => (
			<span className="is-highlighted">{children}</span>
		),
		link: ({ value, children }) => {
			return <CustomLink link={{ ...value, ...{ title: children[0] } }} />;
		},
	},
};

const CustomPortableText = ({ blocks, classNames }) => {
	if (!blocks) return null;

	return (
		<>
			<div className={cx('portable-text', classNames)}>
				<PortableText value={blocks} components={myPortableTextComponents} />
			</div>
			<style global jsx>{`
				.portable-text {
					a {
						display: inline-block;

						&::before,
						&::after {
							content: '';
							position: absolute;
							bottom: 8px;
							height: 1px;
							background-color: var(--cr-white);
							transition: width 0.4s var(--e-inOut-Cubic);
						}

						&::before {
							right: 0;
							width: 100%;
						}

						&::after {
							left: 0;
							width: 0;
						}

						@media (hover: hover) {
							&:hover {
								&::before {
									width: 0;
								}

								&::after {
									width: 100%;
									transition-delay: 0.4s;
								}
							}
						}
					}

					.is-highlighted {
						display: inline-block;
						padding: 4px 20px 0;
						color: var(--cr-black);
						background-color: var(--cr-white);
					}
				}
			`}</style>
		</>
	);
};

export default CustomPortableText;
