import React, { createContext, useState } from 'react';

export const CursorContext = createContext({
	cursorType: '',
	cursorChangeHandler: () => {},
});

const CursorProvider = (props) => {
	const [cursorType, setCursorType] = useState(false);

	const cursorChangeHandler = (cursorType) => {
		setCursorType(cursorType);
	};

	return (
		<CursorContext.Provider
			value={{
				cursorType: cursorType,
				cursorChangeHandler: cursorChangeHandler,
			}}
		>
			{props.children}
		</CursorContext.Provider>
	);
};

export default CursorProvider;
