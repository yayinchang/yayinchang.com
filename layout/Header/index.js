import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import BrandLogo from '@/components/BrandLogo';
import Menu from '@/components/Menu';
import MobileMenu from './mobile-menu';
import useWindowDimensions from '@/hooks/useWindowDimensions';

function Header({ data }) {
	// const router = useRouter();
	// const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const windows = useWindowDimensions();

	const headerRef = useCallback(
		(node) => {
			if (node !== null) {
				document.documentElement.style.setProperty(
					'--s-header',
					`${node.getBoundingClientRect().height}px`
				);
			}
		},
		[windows.width]
	);

	// const onCloseMobileMenu = () => {
	// 	setIsMobileMenuOpen(false);
	// };

	// const onToggleMenu = () => {
	// 	setIsMobileMenuOpen(!isMobileMenuOpen);
	// };

	// useEffect(() => {
	// 	setIsMobileMenuOpen(false);
	// }, [router]);

	return (
		<>
			<header ref={headerRef} className="global-header">
				<div className="main-header c f-h f-a-c">
					<BrandLogo />
					{data?.menu?.items && (
						<Menu
							items={data.menu.items}
							classNames="head-menu f-h f-a-c gap-5"
						/>
					)}
				</div>
			</header>

			<style global jsx>{`
				.global-header {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					width: 100%;
					z-index: 99;
				}

				.main-header {
					padding: var(--s-gutter) 0;

					.menu-link {
						transition: color 0.2s;

						@media (hover: hover) {
							&:hover {
								color: var(--cr-primary);
							}
						}

						&.is-active {
							color: var(--cr-primary);
						}
					}
				}
			`}</style>
		</>
	);
}

export default Header;
