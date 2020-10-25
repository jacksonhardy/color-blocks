import React from 'react';

const RadioButton = (props) => {
	return (
		<input
			type="radio"
			value="px"
			checked={props.units === 'px'}
			defaultChecked
			onChange={() => props.setUnits('px')}
		/>
	);
};

export default RadioButton;
