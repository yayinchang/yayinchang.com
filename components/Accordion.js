import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';
import SvgIcon from '@/components/SvgIcons';

const accordionAnim = {
	open: {
		opacity: 1,
		height: 'auto',
	},
	closed: {
		opacity: 0,
		height: 0,
	},
};

const Accordion = ({
	id,
	title,
	isOpen = false,
	isControlled = false,
	onToggle = () => {},
	classNames,
	children,
}) => {
	const [hasFocus, setHasFocus] = useState(isOpen);

	return (
		<>
			<div className={cx('accordion', classNames)}>
				{!isControlled && (
					<button
						onClick={() => onToggle(id, !isOpen)}
						aria-expanded={isOpen}
						aria-controls={`accordion-${id}`}
						className={cx('accordion-toggle', {
							'is-open': isOpen,
						})}
					>
						{title}
						<SvgIcon type="chevron-down" />
					</button>
				)}
				<motion.div
					className="accordion-content"
					initial={isOpen ? 'open' : 'closed'}
					animate={isOpen ? 'open' : 'closed'}
					variants={accordionAnim}
					transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
					onAnimationComplete={(v) => setHasFocus(v === 'open')}
				>
					<div className="accordion-inner" hidden={!isOpen && !hasFocus}>
						{children}
					</div>
				</motion.div>
			</div>
			<style jsx>{`
				.accordion {
					position: relative;
				}
				.accordion-toggle {
					:global(.chevron-down) {
						transition: transform 0.3s var(--a-swift);
					}
					&.is-open {
						:global(.chevron-down) {
							transform: rotate(180deg);
						}
					}
				}
			`}</style>
		</>
	);
};

export default Accordion;
