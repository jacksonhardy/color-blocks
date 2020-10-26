import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./Counter.scss";
import TextInput from "./../TextInput/TextInput.js";

const Counter = (props) => {
	const inputElement = useRef();

	const doDecrementCounter = (e) => {
		let nextValue = parseFloat(props.value || 0) - buttonStep;
		if (isNaN(nextValue)) return;
		let value = Math.round(nextValue * 1000) / 1000;
		if (!!props.min || props.min === 0) value = Math.max(props.min, value);

		triggerValueChange(value);
	};

	const doIncrementCounter = (e) => {
		let nextValue = parseFloat(props.value || 0) + buttonStep;
		if (isNaN(nextValue)) return;
		let value = Math.round(nextValue * 1000) / 1000;
		if (!!props.max || props.max === 0) value = Math.min(props.max, value);
		triggerValueChange(value);
	};

	const triggerValueChange = (value) => {
		const valueSetter = Object.getOwnPropertyDescriptor(
			inputElement.current,
			"value"
		).set;
		const prototype = Object.getPrototypeOf(inputElement.current);
		const prototypeValueSetter = Object.getOwnPropertyDescriptor(
			prototype,
			"value"
		).set;

		if (valueSetter && valueSetter !== prototypeValueSetter) {
			prototypeValueSetter.call(inputElement.current, value);
		} else {
			valueSetter.call(inputElement.current, value);
		}
		inputElement.current.dispatchEvent(
			new Event("input", { bubbles: true })
		);
	};

	const { buttonStep, ...rest } = props;

	return (
		<div
			className={`counter-wrapper counter-input`}
		>
			<TextInput ref={inputElement} type='number' {...rest} />
			<div className='counter-buttons'>
				<div
					className='counter-button plus'
					onMouseDown={doIncrementCounter}
				>
					+
				</div>
				<div
					className='counter-button minus'
					onMouseDown={doDecrementCounter}
				>
					-
				</div>
			</div>
		</div>
	);
};

Counter.defaultProps = {
	buttonStep: 1,
	value: "",
};

Counter.propTypes = {
	buttonStep: PropTypes.number,
	name: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]),
	onChange: PropTypes.func,
};

export default Counter;
