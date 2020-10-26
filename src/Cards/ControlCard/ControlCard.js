import React, { useState, useEffect } from "react";
import ColorPicker from "../../Inputs/ColorPicker/ColorPicker";
import Counter from "../../Inputs/Counter/Counter";
import {
	RadioButtonWithLabel,
	RadioButtonWithSubLabel,
} from "../../Inputs/RadioButton/RadioButton";
import Slider from "../../Inputs/Slider/Slider";
import Toggle from "../../Inputs/Toggle/Toggle";
import "./ControlCard.scss";

const ControlCard = (props) => {
	const [toggles, setToggles] = useState([]);
	const [combos, setCombos] = useState([]);
	const [radios, setRadios] = useState([]);
	const [counters, setCounters] = useState([]);
	const [colorPickers, setColorPickers] = useState([]);

	useEffect(() => {
		let inputSet = [...props.fields];
		if (inputSet.length > 0) {
			let toggleSet = inputSet.filter((inpt) => inpt.type === "toggle");
			setToggles(toggleSet);
			let radios = inputSet.filter((inpt) => inpt.type === "radio");
			setRadios(radios);
			let comboSet = inputSet.filter((inpt) => inpt.type === "combo");
			setCombos(comboSet);
			let counterSet = inputSet.filter((inpt) => inpt.type === "counter");
			setCounters(counterSet);
			let colorSet = inputSet.filter((inpt) => inpt.type === "color");
			setColorPickers(colorSet);
		} else {
			return;
		}
	}, [props.fields]);

	return (
		<div className='control-card'>
			<div className='card-header'>
				<label className='label'>{props.cardLabel}</label>
				{toggles.length > 0 && (
					<div className='toggles row'>
						{toggles.map((toggle) => (
							<Toggle
								checked={toggle.value}
								labels={{
									off: toggle.label[0],
									on: toggle.label[1],
								}}
								onChange={toggle.onChange}
								useLabels
								key={toggle.name}
							/>
						))}
					</div>
				)}
			</div>
			<div className='column controls-container'>
				{colorPickers.length > 0 && (
					<div className='pickers'>
						{colorPickers.map((picker) => (
							<div className='input-group'>
								<label className='body'>{picker.label}</label>
								<ColorPicker
									value={picker.value}
									name={picker.name}
									onChange={picker.onChange}
									key={picker.name}
								/>
							</div>
						))}
					</div>
				)}
				{counters.length > 0 &&
					counters.map((counter) => (
						<div className='input-group'>
							<label className='body'>{counter.label}</label>
							<Counter
								buttonStep={1}
								key={counter.name}
								max={counter.max}
								min={counter.min}
								name={counter.name}
								onChange={counter.onChange}
								value={counter.value}
							/>
						</div>
					))}
				{radios.length > 0 && (
					<fieldset className='fieldset'>
						<legend className='body'>{radios[0].legend}</legend>
						{radios.map((radio) => (
							<RadioButtonWithLabel
								key={radio.name}
								label={radio.label}
								name={radio.name}
								onChange={radio.onChange}
								value={radio.name}
								checked={radio.value}
							/>
						))}
					</fieldset>
				)}
				{combos.length > 0 &&
					combos.map((control) => (
						<div className='input-group'>
							<label className='body'>{control.label}</label>
							<div className='row combo'>
								<Slider
									value={control.value}
									name={control.name}
									onChange={control.onChange}
									max={control.max}
								/>
								<Counter
									buttonStep={1}
									key={control.name}
									max={control.max}
									min={control.min}
									name={control.name}
									onChange={control.onChange}
									value={control.value}
								/>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ControlCard;
