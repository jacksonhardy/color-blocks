import React from 'react';

const Slider = (props) => {
	return (
		<div className="input-container">
			<p style={{ textAlign: 'right', width: 200 }}> {props.name}</p>
			<input
				type="range"
				name={props.name}
				value={props.value}
				min={0}
				max={props.max}
				onChange={props.onChange}
				className="slider"
			/>
			<p style={{ textAlign: 'left', width: 80 }}> {props.value}</p>
		</div>
	);
};

export default Slider;
