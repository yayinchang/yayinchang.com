import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import BrandLogo from '@/components/BrandLogo';
import Menu from '@/components/Menu';
import MobileMenu from './mobile-menu';
import useWindowDimensions from '@/hooks/useWindowDimensions';

const MobileMenuTrigger = ({ isMobileMenuOpen, onHandleClick }) => {
	const mobileMenuTriggerWidth = 32;
	const mobileMenuTriggerHeight = 25;

	return (
		<>
			<button
				className={cx('mobile-menu-trigger mobile-down-only', {
					'is-open': isMobileMenuOpen,
				})}
				aria-label="Toggle Menu"
				onClick={onHandleClick}
			>
				<hr />
			</button>
			<style jsx>{`
				.mobile-menu-trigger {
					position: relative;
					width: ${mobileMenuTriggerWidth}px;
					height: ${mobileMenuTriggerHeight}px;
					z-index: 120;
					transition: opacity 0.6s;
					hr,
					&:before,
					&:after {
						content: '';
						display: block;
						position: absolute;
						width: ${mobileMenuTriggerWidth}px;
						height: 2px;
						top: 50%;
						left: 50%;
						border-radius: var(--s-3);
						-webkit-transform: translate(-50%, -50%) rotate(0deg);
						transform: translate(-50%, -50%) rotate(0deg);
						-webkit-transform-origin: center;
						transform-origin: center;
						margin: 0;
						background-color: var(--cr-black);
						transition: 0.4s;
					}
					&:before {
						top: 25%;
					}

					&:after {
						top: 75%;
					}

					hr {
						outline: none;
						border: none;
						transition: opacity 0.3s;
					}
					&.is-open {
						&:before {
							top: 50%;
							transform: translate(-50%, -50%) rotate(140deg);
						}
						&:after {
							top: 50%;
							transform: translate(-50%, -50%) rotate(-140deg);
						}
						hr {
							opacity: 0;
						}
					}
				}
			`}</style>
		</>
	);
};

function Header({ data }) {
	const router = useRouter();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

	const onCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const onToggleMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [router]);

	return (
		<>
			<header ref={headerRef} className="global-header">
				<div
					className={cx('main-header c f-h f-a-c', {
						'is-open': isMobileMenuOpen,
					})}
				>
					<BrandLogo />
					{data?.menuDesktop?.items && (
						<Menu
							items={data.menuDesktop.items}
							classNames="f-h f-a-c gap-3 mobile-up-only"
						/>
					)}
					<MobileMenuTrigger
						isMobileMenuOpen={isMobileMenuOpen}
						onHandleClick={onToggleMenu}
					/>
				</div>
			</header>
			{data?.menuMobilePrimary.items && (
				<MobileMenu
					items={data.menuMobilePrimary.items}
					isOpen={isMobileMenuOpen}
					closeMenu={onCloseMobileMenu}
				/>
			)}

			<style global jsx>{`
				header {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					width: 100%;
					z-index: 99;
					transition: background-color 300ms ease-in 0s;
					box-shadow: 1px 1px 10px -2px var(--cr-gray);
					padding: var(--s-1) 0;
				}
				.main-header {
					&.is-open {
						background-color: var(--cr-white);
						height: 100%;
						transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1) 0s,
							height 0.66s cubic-bezier(0.52, 0.16, 0.24, 1) 0s;
					}
				}
			`}</style>
		</>
	);
}

export default Header;
