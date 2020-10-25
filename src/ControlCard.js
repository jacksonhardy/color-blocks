import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import Slider from './Slider';

const ControlCard = (props) => {
	const [toggles, setToggles] = useState([]);
	const [controls, setControls] = useState([]);

	useEffect(() => {
		let inputSet = [...props.fields];
		if (inputSet.length > 0) {
			let toggleSet = inputSet.filter((inpt) => inpt.type === 'toggle');
			setToggles(toggleSet);
			let allOthers = inputSet.filter((inpt) => inpt.type !== 'toggle');
			setControls(allOthers);
		} else {
			return;
		}
	}, [props.fields]);

	return (
		<div className="control-card">
			{toggles.length > 0 && (
				<div className="row toggles-container">toggles</div>
			)}
			{controls.length > 0 && (
				<div className="column controls-container">
					{controls.map((control) =>
						control.type === 'combo' ? (
							<div className="row combo">
								<Slider
									value={control.value}
									name={control.name}
									label={control.label}
									onChange={control.onChange}
									max={control.max}
								/>
								<input
									type="text"
									value={control.value}
									name={control.name}
									onChange={control.onChange}
								/>
							</div>
						) : control.type === 'slider' ? (
							<>
								<Slider
									value={control.value}
									name={control.name}
									label={control.label}
									onChange={control.onChange}
									max={control.max}
								/>
							</>
						) : (
							<>
								<Counter />
							</>
						)
					)}
				</div>
			)}
		</div>
	);
};

export default ControlCard;
