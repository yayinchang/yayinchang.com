import React from 'react';
import { useRouter } from 'next/router';
import { getStaticRoute, getActive } from '@/lib/routes';
import cx from 'classnames';
import Dropdown from '@/components/MenuDropdown';
import CustomLink from '@/components/CustomLink';

const Menu = ({ items, hasFocus = true, onClick, classNames, ...rest }) => {
	const router = useRouter();

	if (!items) return null;

	return (
		<>
			<ul className={classNames ? classNames : 'f-h'} {...rest}>
				{items.map((item, key) => {
					const isDropdown = !!item.dropdownItems;
					const isStatic = getStaticRoute(item.page?.type);
					const isActive = getActive(isStatic, item.page?.slug, router);

					// Dropdown List
					if (isDropdown) {
						const { dropdownItems } = item;
						const activeDropdown =
							dropdownItems.filter((item) => {
								const isStatic = getStaticRoute(item.page?.type);
								return getActive(isStatic, item.page?.slug, router);
							}).length > 0;
						return (
							<li
								key={key}
								className={cx('t-l-2', { 'is-active': activeDropdown })}
							>
								<Dropdown
									title={item.title}
									id={item._key}
									items={item.dropdownItems}
									onClick={onClick}
								/>
							</li>
						);
						// single link
					} else {
						return (
							<li key={key} className={cx('t-l-2', { 'is-active': isActive })}>
								<CustomLink
									tabIndex={!hasFocus ? -1 : null}
									link={item.link}
									onClick={onClick}
								>
									{item.title}
								</CustomLink>
							</li>
						);
					}
				})}
			</ul>
		</>
	);
};

export default Menu;
