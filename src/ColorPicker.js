import React from 'react';

const ColorPicker = (props) => {
	return (
		<div className="input-container">
			<p style={{ textAlign: 'right', width: 200 }}> {props.name}</p>
			<input
				className="color-picker"
				type="color"
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			/>
			<p style={{ textAlign: 'left', width: 80 }}> {props.value}</p>
		</div>
	);
};

export default ColorPicker;
