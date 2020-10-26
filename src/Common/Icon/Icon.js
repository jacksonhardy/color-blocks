import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Icon.scss";

const iconPropTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  // DOM props allowed
};

export const LightIcon = (props) => {
  const { icon, className, ...rest } = props;
  return (
    <FontAwesomeIcon
      icon={["fal", `${icon}`]}
      className={`${className} ${props.color} icon`}
      {...rest}
    />
  );
};

LightIcon.propTypes = iconPropTypes;

export const DuoToneIcon = (props) => {
  const { icon, className, swapOpacity, ...rest } = props;
  return (
    <FontAwesomeIcon
      icon={["fad", `${icon}`]}
      className={`${className} ${props.color} icon`}
      swapOpacity={swapOpacity}
      {...rest}
    />
  );
};

DuoToneIcon.propTypes = iconPropTypes;

export const Icon = (props) => {
  const { icon, className, ...rest } = props;
  return (
    <FontAwesomeIcon
      icon={["far", `${icon}`]}
      className={`${className} ${props.color} icon`}
      {...rest}
    />
  );
};

Icon.propTypes = iconPropTypes;

export const SolidIcon = (props) => {
  const { icon, className, ...rest } = props;
  return (
    <FontAwesomeIcon
      icon={["fas", `${icon}`]}
      className={`${props.className} ${props.color} icon`}
      {...rest}
    />
  );
};

SolidIcon.propTypes = iconPropTypes;

export const BrandIcon = (props) => {
  const { icon, className, ...rest } = props;
  return (
    <FontAwesomeIcon
      icon={["fab", `${icon}`]}
      className={`${className} ${props.color} icon`}
      {...rest}
    />
  );
};

BrandIcon.propTypes = iconPropTypes;
