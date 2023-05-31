import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getStaticRoute, getActive } from '@/lib/routes';
import cx from 'classnames';
import CustomLink from '@/components/CustomLink';

const MenuDropdown = ({ id, title, items, onClick }) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={cx('dropdown', { 'is-open': isOpen })}>
				<button
					onClick={() => setIsOpen(!isOpen)}
					aria-expanded={isOpen}
					aria-controls={`dropdown-${id}`}
					className="dropdown-toggle"
				>
					{title}
				</button>
				<div id={`dropdown-${id}`} className="dropdown-content">
					<ul className="dropdown-nav">
						{items.map((item, key) => {
							const isStatic = getStaticRoute(item.page?.type);
							const isActive = getActive(isStatic, item.page?.slug, router);

							return (
								<li
									key={key}
									className={cx('t-l-2', { 'is-active': isActive })}
								>
									<CustomLink
										tabIndex={!isOpen ? -1 : null}
										link={item.link}
										onClick={onClick}
									>
										{item.title}
									</CustomLink>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<style jsx>{`
				.dropdown {
					&.is-open {
						.dropdown-content {
							opacity: 1;
							pointer-event: auto;
						}
					}
				}
				.dropdown-content {
					opacity: 0;
					pointer-event: none;
				}
				.dropdown-nav {
					position: absolute;
				}
			`}</style>
		</>
	);
};

export default MenuDropdown;
