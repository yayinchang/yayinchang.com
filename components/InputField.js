import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import SvgIcon from '@/components/SvgIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnim } from '@/lib/animate';

function InputField({
	id,
	type,
	label,
	placeholder,
	name,
	value,
	watch,
	register,
	classNames,
	errors,
	labelTop = false,
	labelIsScreenReader = false,
	...rest
}) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
			<div
				className={cx('field', classNames, {
					'has-error': errors && errors[name],
				})}
			>
				{labelTop && (
					<label
						className={cx({
							'screen-reader-only': labelIsScreenReader,
						})}
						htmlFor={id ? id : null}
						style={{ display: 'inline-block', margin: '0 0 20px' }}
					>
						{label ? label : name}
					</label>
				)}

				{type == 'textarea' ? (
					<textarea
						id={id ? id : null}
						className={cx({ 'has-value': watch[name] })}
						value={value}
						{...register}
						{...rest}
					></textarea>
				) : (
					<input
						id={id ? id : null}
						className={cx({ 'has-value': watch[name] })}
						type={showPassword ? 'text' : type}
						value={value}
						placeholder={placeholder}
						{...register}
						{...rest}
					/>
				)}

				{!labelTop && (
					<label
						className={cx({
							'screen-reader-only': labelIsScreenReader,
						})}
						htmlFor={id ? id : null}
					>
						{label ? label : name}
					</label>
				)}

				{type === 'password' ? (
					<button
						type="button"
						tabIndex="-1"
						className="show-password"
						onClick={() => {
							setShowPassword(!showPassword);
						}}
					>
						<SvgIcon type={`eye-${showPassword ? 'close' : 'open'}`} />
					</button>
				) : null}
				<AnimatePresence>
					{errors && errors[name] ? (
						<motion.p
							initial="hide"
							animate="show"
							exit="hide"
							variants={fadeAnim}
							className="error-message t-l-2"
						>
							{errors[name].message}
						</motion.p>
					) : null}
				</AnimatePresence>
			</div>

			<style jsx>{`
				.field {
					:global(.svg-check) {
						width: 15px;
					}
					:global(.error-message) {
						margin: 10px 0;
						color: var(--cr-red);
						text-transform: uppercase;
					}
					&.has-error {
						input {
							border-bottom: 1px solid var(--cr-red);
						}
					}
				}
				input[type='checkbox'] {
					cursor: pointer;
					+ label {
						cursor: pointer;
					}
				}
				.show-password {
					position: absolute;
					right: 0;
					top: 50%;
					transform: translate(0, -50%);

					:global(svg) {
						width: 20px;
						height: 20px;
					}
				}
			`}</style>
		</>
	);
}

export default InputField;
