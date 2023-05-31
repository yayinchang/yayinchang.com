import React, { useEffect, forwardRef } from 'react';
import { useRouter } from 'next/router';
import Menu from '@/components/Menu';
import SvgIcon from '@/components/SvgIcons';
import {
	AnimatePresence,
	domAnimation,
	LazyMotion,
	motion,
} from 'framer-motion';
import { removeQueryString } from '@/lib/helpers';
import { domTransitionAnim } from '@/lib/animate';

const Footer = forwardRef(function Footer(props, ref) {
	const { data = {} } = props;
	const router = useRouter();

	useEffect(() => {
		if (ref.current) {
			document.documentElement.style.setProperty(
				'--s-footer',
				`${ref.current.getBoundingClientRect().height}px`
			);
		}
	}, [ref]);

	return (
		<>
			<LazyMotion features={domAnimation}>
				<AnimatePresence mode="wait">
					<motion.footer
						ref={ref}
						key={removeQueryString(router.asPath)}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={domTransitionAnim.transition}
						variants={domTransitionAnim}
						className="global-footer"
					>
						<div className="main-footer bg-blue">
							{data?.blocks &&
								data.blocks.map((block, key) => {
									if (block.menu === null) {
										return null;
									}
									return (
										<div key={key} className="footer-block">
											{block.title && <p className="is-h3">{block.title}</p>}
											{block.menu?.items && (
												<Menu
													items={block.menu.items}
													classNames="menu-footer"
												/>
											)}

											{block.social && (
												<div className="menu-social">
													{block.social.map((link, key) => {
														return (
															<a
																key={key}
																href={link.url}
																target="_blank"
																rel="noopener noreferrer"
															>
																<SvgIcon type={link.icon} />
															</a>
														);
													})}
												</div>
											)}
										</div>
									);
								})}
							{data?.siteCopyright && (
								<div className="footer-copyright t-l-1">
									{data.siteCopyright}
								</div>
							)}
						</div>
					</motion.footer>
				</AnimatePresence>
			</LazyMotion>

			<style global jsx>{`
				.main-footer {
					padding: var(--s-4);
				}
			`}</style>
		</>
	);
});

export default Footer;
