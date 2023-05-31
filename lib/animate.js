const fadeAnim = {
	show: {
		opacity: 1,
		transition: {
			duration: 0.2,
			delay: 0.1,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
	hide: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
};

const flipAnim = {
	show: {
		y: ['100%', '0%'],
		transition: {
			duration: 1,
			ease: [0.16, 1, 0.3, 1],
			when: 'beforeChildren',
		},
	},
	hide: {
		y: ['0%', '-100%'],
		transition: {
			duration: 1,
			ease: [0.16, 1, 0.3, 1],
			when: 'afterChildren',
		},
	},
};

const swipeAnim = {
	show: {
		opacity: 1,
		x: ['-1rem', '0rem'],
		transition: {
			x: {
				duration: 0.8,
				delay: 0.1,
				ease: [0.16, 1, 0.3, 1],
			},
			opacity: {
				duration: 0.2,
				delay: 0.1,
			},
		},
	},
	hide: {
		x: ['0rem', '1rem'],
		opacity: 0,
		transition: {
			x: {
				duration: 0.4,
				ease: [0.16, 1, 0.3, 1],
			},
			opacity: {
				duration: 0.1,
			},
		},
	},
};

const counterAnim = {
	show: {
		y: '0%',
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1],
			when: 'beforeChildren',
		},
	},
	hide: (custom) => ({
		y: `${-100 * custom}%`,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1],
			when: 'afterChildren',
		},
	}),
	hideR: (custom) => ({
		y: `${100 * custom}%`,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1],
			when: 'afterChildren',
		},
	}),
};

const listAnim = {
	hide: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: 'linear',
			staggerChildren: 0.05,
		},
	},
};

const domTransitionAnim = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
	transition: {
		delay: 0.4,
		duration: 0.6,
		ease: 'linear',
	},
};

export {
	fadeAnim,
	flipAnim,
	swipeAnim,
	counterAnim,
	listAnim,
	domTransitionAnim,
};
