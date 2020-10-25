import React from 'react';

const Button = (props) => {
	return (
		<button
			className={`button ${props.className ? props.className : ''}`}
			onClick={props.onClick}
		>
			{props.label}
		</button>
	);
};

export default Button;
