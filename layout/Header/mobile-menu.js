import React from 'react';
import { useRouter } from 'next/router';
import { getStaticRoute, getActive } from '@/lib/routes';
import cx from 'classnames';
import CustomLink from '@/components/CustomLink';

const MobileMenu = ({ items, isOpen, closeMenu, classNames, ...rest }) => {
	const router = useRouter();

	if (!items) return null;

	return (
		<>
			<aside
				className={cx('mobile-menu', {
					'is-open': isOpen,
				})}
			>
				<ul className={cx('menu-links', classNames)} {...rest}>
					{items.map((item, key) => {
						const isStatic = getStaticRoute(item.page?.type);
						const isActive = getActive(isStatic, item.page?.slug, router);

						return (
							<li key={key} className={cx('t-l-2', { 'is-active': isActive })}>
								<CustomLink link={item.link} onClick={closeMenu}>
									{item.title}
								</CustomLink>
							</li>
						);
					})}
				</ul>
			</aside>
			<style jsx>{`
				.mobile-menu {
					position: fixed;
					top: var(--s-header);
					z-index: 1;
					right: 0px;
					bottom: 0px;
					width: 100%;
					max-width: 420px;
					height: calc(100% - var(--s-header));
					background: rgb(255, 255, 255);
					border: 1px solid rgb(229, 232, 235);
					overflow: auto;
					// filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
					transition: transform 0.3s var(--a-panel);
					transform: translate3d(100%, 0px, 0px);

					&.is-open {
						transform: translate3d(0px, 0px, 0px);
					}
				}
				.menu-links {
					li {
						height: 80px;
						line-height: 80px;
						border-bottom: 1px solid var(--cr-subdued);
						a {
							padding: 0 var(--s-2);
						}
					}
				}
			`}</style>
		</>
	);
};

export default MobileMenu;
