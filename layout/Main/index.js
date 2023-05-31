import React from 'react';
import { useRouter } from 'next/router';
import {
	AnimatePresence,
	domAnimation,
	LazyMotion,
	motion,
} from 'framer-motion';
import { removeQueryString } from '@/lib/helpers';
import { domTransitionAnim } from '@/lib/animate';

export default function Main({ children, siteData = {} }) {
	const router = useRouter();

	return (
		<>
			<LazyMotion features={domAnimation}>
				<AnimatePresence mode="wait">
					<motion.main
						key={removeQueryString(router.asPath)}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={domTransitionAnim.transition}
						variants={domTransitionAnim}
					>
						{children}
					</motion.main>
				</AnimatePresence>
			</LazyMotion>
			<style global jsx>{`
				main {
					padding: 0.1px 0;
					min-height: calc(var(--s-vp-height) - var(--s-footer));
				}
			`}</style>
		</>
	);
}
