import React from 'react';
import { useRouter } from 'next/router';
import { getStaticRoute, getActive } from '@/lib/routes';
import cx from 'classnames';
import CustomLink from '@/components/CustomLink';

const Menu = ({ items, hasFocus = true, onClick, classNames, ...rest }) => {
	const router = useRouter();

	if (!items) return null;

	return (
		<>
			<ul className={classNames ? classNames : 'f-h'} {...rest}>
				{items.map((item, key) => {
					const isStatic = getStaticRoute(item.page?.type);
					const isActive = getActive(isStatic, item.page?.slug, router);

					return (
						<li key={key} className="t-small t-bold">
							<CustomLink
								tabIndex={!hasFocus ? -1 : null}
								link={item.link}
								onClick={onClick}
								classNames="menu-link"
							>
								{item.title}
							</CustomLink>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Menu;
