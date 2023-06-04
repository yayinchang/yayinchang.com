import React, { useEffect, forwardRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
	AnimatePresence,
	domAnimation,
	LazyMotion,
	motion,
} from 'framer-motion';
import { removeQueryString } from '@/lib/helpers';
import { domTransitionAnim } from '@/lib/animate';
import SvgIcon from '@/components/SvgIcons';

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
						<div className="main-footer c f-h f-f-c gap-5">
							{data?.siteCopyright && (
								<div className="footer-copyright t-label-small">
									&copy; {new Date().getFullYear()} {data.siteCopyright}{' '}
									{data.title}
								</div>
							)}
							{data?.social?.length > 0 && (
								<div className="footer-social f-h gap-5">
									{data.social.map((link) => {
										return (
											<Link
												key={link._key}
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												className="social-link cr-light"
											>
												<SvgIcon type={link.icon} />
											</Link>
										);
									})}
								</div>
							)}
						</div>
					</motion.footer>
				</AnimatePresence>
			</LazyMotion>

			<style global jsx>{`
				.main-footer {
					padding: var(--s-gutter) 0;
				}

				.footer-social {
					.social-link {
						width: 20px;
						height: 20px;
						transition: color 0.2s;

						@media (hover: hover) {
							&:hover {
								color: var(--cr-black);
							}
						}
					}
				}
			`}</style>
		</>
	);
});

export default Footer;
