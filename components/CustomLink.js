import React, { useContext } from 'react';
import NextLink from 'next/link';
import cx from 'classnames';
import { getStaticRoute, getDynamicRoute } from '@/lib/routes';
import { CursorContext } from '@/context/CursorProvider';

const CustomLink = ({ link, children, classNames, ...rest }) => {
	const { cursorChangeHandler } = useContext(CursorContext);
	const isLink = !!link.url;
	const isStatic = getStaticRoute(link.page?.type);

	// External Link
	if (isLink) {
		return (
			<a
				href={link.url}
				target={!link.url.match('^mailto:') && link.blank ? '_blank' : null}
				rel={link.blank ? 'noopener noreferrer' : null}
				onMouseEnter={() => cursorChangeHandler('link')}
				onMouseLeave={() => cursorChangeHandler(false)}
				className={cx(link.styles?.style, classNames, {
					btn: link.isButton,
				})}
				{...rest}
			>
				{link.title || children}
			</a>
		);
		// Internal Page
	} else {
		const isDynamic = getDynamicRoute(link.page?.type);
		const isHome = link.page?.isHome;

		return (
			<NextLink
				href={
					isHome
						? '/'
						: isStatic !== false
						? `/${isStatic}`
						: `/${isDynamic ? `${isDynamic}/` : ''}${link.page?.slug}`
				}
				scroll={false}
				target={link.blank ? '_blank' : null}
				rel={link.blank ? 'noopener noreferrer' : null}
				onMouseEnter={() => cursorChangeHandler('link')}
				onMouseLeave={() => cursorChangeHandler(false)}
				className={cx(link.styles?.style, classNames, {
					'btn btn--text': link.isButton,
				})}
				{...rest}
			>
				{children || link.label}
			</NextLink>
		);
	}
};

export default CustomLink;
