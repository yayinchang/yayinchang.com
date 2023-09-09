import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import useMousePosition from '@/hooks/useMousePosition';
import { CursorContext } from '@/context/CursorProvider';

const Cursor = () => {
	const router = useRouter();
	const { x, y } = useMousePosition();
	const { cursorType, cursorChangeHandler } = useContext(CursorContext);

	useEffect(() => {
		cursorChangeHandler(false);
	}, [router]);

	return (
		<ins
			className={cx('main-cursor', {
				[`cursor-${cursorType}`]: !!cursorType,
			})}
			style={{
				left: `${x}px`,
				top: `${y}px`,
			}}
		/>
	);
};

export default Cursor;
