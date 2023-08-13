import React from 'react';
import { motion } from 'framer-motion';

const BrandTitle = ({ children }) => {
	const wordAnimation = {
		hidden: {},
		visible: {},
	};

	const characterAnimation = {
		hidden: {
			opacity: 0,
			y: '4vw',
		},
		visible: {
			delay: 0.4,
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: [0.175, 0.885, 0.32, 1.275],
			},
		},
	};

	return children.split(' ').map((word, index) => {
		return (
			<motion.div
				key={index}
				className="stagger-word user-select-disable"
				aria-hidden="true"
				initial="hidden"
				animate={'visible'}
				variants={wordAnimation}
				transition={{
					delayChildren: index * 0.25,
					staggerChildren: 0.05,
				}}
			>
				{word.split('').map((character, index) => {
					return (
						<motion.span
							className="stagger-character"
							aria-hidden="true"
							key={index}
							variants={characterAnimation}
						>
							{character}
						</motion.span>
					);
				})}
			</motion.div>
		);
	});
};

export default BrandTitle;
