import React from 'react';
import './Slider.scss'

const Slider = (props) => {
	return (
			<input
				type="range"
				name={props.name}
				value={props.value}
				min={0}
				max={props.max}
				onChange={props.onChange}
				className="slider"
			/>
	);
};

export default Slider;
