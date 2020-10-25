import React, { useState } from 'react';

const fieldset = (props) => {
	return (
		<fieldset>
			<legend>Border Radius Units</legend>
			<label>px</label>
			<input
				type="radio"
				value="px"
				checked={props.units === 'px'}
				defaultChecked
				onChange={() => props.setUnits('px')}
			/>
			&nbsp; &nbsp; &nbsp; &nbsp;
			<label>%</label>
			<input
				type="radio"
				value="%"
				checked={props.units === '%'}
				onChange={() => props.setUnits('%')}
			/>
		</fieldset>
	);
};
