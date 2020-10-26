import React from "react";
import PropTypes from "prop-types";
import "./RadioButton.scss";

export const RadioButton = (props) => {
	return (
		<div value={props.checked} className={`radio-button__display ${props.checked ? '--checked' : '--empty'}`} onClick={props.onChange}>
			<input
				type='radio'
				value={props.value}
				onChange={props.onChange}
				className={`radio-button`}
				onFocus={props.onFocus}
				tabIndex={props.tabIndex}
				name={props.name}
				disabled={props.disabled}
				checked={props.checked}
			/>
		</div>
	);
};

RadioButton.defaultProps = {};

RadioButton.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	tabIndex: PropTypes.number,
	value: PropTypes.any,
};

export const RadioButtonWithSubLabel = (props) => {
	return (
		<div className='radio-button--sub-label'>
			<RadioButton {...props} />
			<label className='body' htmlFor={props.name}>
				{props.label}
			</label>
		</div>
	);
};
RadioButtonWithSubLabel.propTypes = {
	label: PropTypes.any,
	name: PropTypes.any,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	tabIndex: PropTypes.number,
	value: PropTypes.any,
};

export const RadioButtonWithLabel = (props) => {
	return (
		<div className='radio-button--with-label'>
			<RadioButton {...props} />
			<label className='body' htmlFor={props.name}>
				{props.label}
			</label>
		</div>
	);
};

RadioButtonWithLabel.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	tabIndex: PropTypes.number,
	value: PropTypes.any,
	label: PropTypes.any,
	checked: PropTypes.bool,
};
