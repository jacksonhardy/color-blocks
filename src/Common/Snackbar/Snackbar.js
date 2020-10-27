import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "./Snackbar.scss";
import { DarkMode } from "../../App";

const Snackbar = (props) => {
	const theme = useContext(DarkMode)
	useEffect(() => {
		if (props.show) {
			setTimeout(() => {
				props.hide();
			}, 3000);
		}
	}, [props.show]);

	return (
		<div className={`snackbar ${theme}`}>
			<p className='body'>{props.message}</p>
		</div>
	);
};

Snackbar.defaultProps = {};

Snackbar.propTypes = {
    hide: PropTypes.func,
    message: PropTypes.string,
    show: PropTypes.bool,
}

export default Snackbar;
