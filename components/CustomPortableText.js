import React from 'react';
import cx from 'classnames';
import CustomLink from '@/components/CustomLink';
import { PortableText } from '@portabletext/react';
import Photo from '@/components/Photo';

const myPortableTextComponents = {
	block: {
		h1: ({ children }) => <h1 className="t-h-1">{children}</h1>,
		h1mock: ({ children }) => <p className="t-h-1">{children}</p>,
		h2: ({ children }) => <h2 className="t-h-2">{children}</h2>,
		h2mock: ({ children }) => <p className="t-h-2">{children}</p>,
		h3: ({ children }) => <h3 className="t-h-3">{children}</h3>,
		h3mock: ({ children }) => <p className="t-h-3">{children}</p>,
		h4: ({ children }) => <h4 className="t-h-4">{children}</h4>,
		h4mock: ({ children }) => <p className="t-h-4">{children}</p>,
	},
	list: {
		bullet: ({ children }) => <ul>{children}</ul>,
		number: ({ children }) => <ol>{children}</ol>,
	},
	types: {
		photo: (data) => {
			const { value } = data;
			return <Photo photo={value} />;
		},
		table: ({ node }) => (
			<table>
				<tbody>
					{node?.rows.map((row) => (
						<tr key={row._key}>
							{row?.cells.map((cell, index) => (
								<td key={row._key + index}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		),
		horizontalRule: () => <hr />,
	},

	marks: {
		link: ({ value, children }) => {
			return <CustomLink link={{ ...value, ...{ title: children[0] } }} />;
		},
	},
};

const CustomPortableText = ({ blocks, classNames }) => {
	if (!blocks) return null;

	return (
		<div className={cx('portable-text', classNames)}>
			<PortableText value={blocks} components={myPortableTextComponents} />
		</div>
	);
};

export default CustomPortableText;
