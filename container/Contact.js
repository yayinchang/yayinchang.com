import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import { CursorContext } from '@/context/CursorProvider';
import AnimatedSplitText from '@/components/AnimatedSplitText';

const Contact = ({ data = {} }) => {
	if (!data) return;

	const [isCopied, setIsCopied] = useState(false);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0,
	});

	const { cursorChangeHandler } = useContext(CursorContext);

	const handleCopy = () => {
		navigator.clipboard.writeText(data.email);
		setIsCopied(true);
	};

	useEffect(() => {
		setTimeout(() => {
			setIsCopied(false);
		}, 800);
	}, [isCopied]);

	return (
		<>
			<section
				ref={ref}
				className={cx('contact f-v f-a-s gap-gutter-sm', {
					'is-animated': inView,
				})}
				data-animate="up"
			>
				<h2
					className={cx('contact-email t-heading-2', {
						'is-copied': isCopied,
					})}
					onMouseEnter={() => cursorChangeHandler('copy-email')}
					onMouseLeave={() => cursorChangeHandler(false)}
					onClick={handleCopy}
				>
					<AnimatedSplitText>{data.email}</AnimatedSplitText>
				</h2>
				{data.emailDescription && (
					<p className="t-body">{data.emailDescription}</p>
				)}
			</section>
			<style jsx>{`
				.contact {
					padding: var(--s-gutter-md);

					&-email {
						position: relative;
						display: inline-block;
						cursor: none;
						transition: color 0.4s var(--e-inOut-Expo);

						&::before {
							content: '';
							position: absolute;
							width: 0;
							height: 100%;
							top: 0;
							left: -15%;
							background-color: var(--cr-white);
							transition: width 0.4s var(--e-inOut-Expo);
							z-index: -1;
						}

						&::after {
							content: 'COPIED';
							position: absolute;
							top: 50%;
							right: -2.5%;
							font: 200 30%/1.5 'Neue Haas Grotesk Display', Helvetica,
								sans-serif;
							color: var(--cr-black);
							transform-origin: center;
							transform: translate(50%, -50%) rotate(-90deg);
							opacity: 0;
							pointer-events: none;
							z-index: 2;
						}

						&.is-copied {
							color: var(--cr-black);
							&::before {
								width: 120%;
							}
							&:after {
								opacity: 1;
							}
						}
					}
				}
			`}</style>
		</>
	);
};

export default Contact;
