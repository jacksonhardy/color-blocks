import React from "react";
import PropTypes from "prop-types";
import "./../Buttons.scss";

/////////////////////////////////////
////////// Regular Button //////////
///////////////////////////////////

const Button = (props) => {
  const {size, buttonClasses, buttonStyle, isDisabled, ...rest} = props;
  return (
    <button
      className={`button button--regular ${buttonStyle} ${buttonClasses} ${size}`}
      disabled={isDisabled}
      onClick={props.onClick}
      form={props.form}
      value={props.value}
      onSubmit={props.onSubmit}
      id={props.id}
      {...rest}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  buttonStyle: "primary",
  isDisabled: false,
  size: "auto",
  label: 'Button'
};

Button.propTypes = {
  buttonClasses: PropTypes.string,
  buttonStyle: PropTypes.string,
  text: PropTypes.string.isRequired,
  form: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  size: PropTypes.string,
  value: PropTypes.string,
};

export default Button