import React from "react";
import TextInput from "../TextInput/TextInput";
import "./ColorPicker.scss";

const ColorPicker = (props) => {
	return (
		<div className='color-picker'>
			<div style={{background: props.value}} className='color-picker__swatch'>
				<input
					className='color-picker__picker'
					type='color'
					name={props.name}
					value={props.value}
					onChange={props.onChange}
				/>
			</div>
			<TextInput
				className='color-picker__text'
				type='text'
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default ColorPicker;
