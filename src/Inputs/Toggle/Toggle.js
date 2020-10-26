import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./Toggle.scss";

const Toggle = (props) => {
	return (
		<>
			<input
				type='checkbox'
				className='toggle__input'
				checked={props.checked}
				onChange={props.onChange}
			/>
			<div className='toggle' is-on={`${props.checked}`} onClick={props.onChange}>
				<span
					className='toggle__half --off'
					is-active={`${!props.checked}`}
				>
					{props.useLabels && (
						<p className='toggle-label body'>{props.labels.off}</p>
					)}

					{props.useIcons && (
						<div
							className='toggle__button'
							toggle-on={`${props.checked}`}
						/>
					)}
					{props.useLabels && (
						<div
							className='toggle__button-alt'
							toggle-on={`${props.checked}`}
						/>
					)}


					{props.useIcons && (
						{/* <FontAwesomeIcon
							icon={props.icons.off}
							className='icon'
						/> */}
					)}
				</span>
				<span
					className='toggle__half --on'
					is-active={`${props.checked}`}
				>
					{props.useLabels && (
						<p className='toggle-label body'>{props.labels.on}</p>
					)}
					{props.useIcons && (
						{/* <FontAwesomeIcon
							icon={props.icons.on}
							className='icon'
						/> */}
					)}
				</span>
			</div>
		</>
	);
};

Toggle.defaultProps = {
	useLabels: true,
	useIcons: false,
	icons: {
		off: "moon",
		on: "sun",
	},
	labels: {
		off: "Left",
		on: "Right"
	}
};

Toggle.propTypes = {
	checked: PropTypes.any,
	icons: PropTypes.shape({
		off: PropTypes.any,
		on: PropTypes.any,
	}),
	labels: PropTypes.shape({
		off: PropTypes.any,
		on: PropTypes.any,
	}),
	onChange: PropTypes.any,
	useIcons: PropTypes.any,
	useLabels: PropTypes.any,
};

export default Toggle;
