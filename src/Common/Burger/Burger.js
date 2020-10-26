import React from 'react';
import './Burger.scss';
import PropTypes from 'prop-types';

const Burger = (props) => {
	return (
		<div
			className={`menu-burger ${props.menuIsOpen ? 'x' : 'burger'} ${
				props.burger
			}`}
			onClick={props.toggleMenuOpen}
		>
			<div className={`menu-burger__inner v jc ac`}>
				<div
					className={`${
						!props.menuIsOpen ? 'burger-arm' : 'x-arm'
					} --top`}
				/>
				{props.burger === 'two-arm' ||
					props.burger === 'two-arm-simple' || (
						<div
							className={`${
								!props.menuIsOpen ? 'burger-arm' : 'x-arm'
							} --middle`}
						/>
					)}
				<div
					className={`${
						!props.menuIsOpen ? 'burger-arm' : 'x-arm'
					} --bottom`}
				/>
			</div>
		</div>
	);
};

Burger.defaultProps = {
	burger: 'default',
};

Burger.propTypes = {
	burger: PropTypes.oneOf([
		'default',
		'two-arm',
		'no-animation',
		'alternate',
		'two-arm-simple',
	]),
	menuIsOpen: PropTypes.bool.isRequired,
	toggleMenuOpen: PropTypes.func.isRequired,
};

export default Burger;
