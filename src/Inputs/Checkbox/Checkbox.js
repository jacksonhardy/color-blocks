import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./Checkbox.scss";
import check from "assets/icons/Check--White.svg";
import { uuid } from "lib/uuid";

const Checkbox = (props) => {
    const inputElement = useRef();

    const handleChange = (e) => {
        props.onChange(e, props.name, props.checked);
    };

    const handleSpanClick = (e) => {
        inputElement.current.click();
    }

    return (
        <div className='checkbox-wrapper relative'>
            <input
                ref={inputElement}
                type='checkbox'
                className='checkbox input'
                name={props.name}
                id={props.id}
                onChange={handleChange}
                required={props.required}
                disabled={props.disabled}
                checked={props.checked}
            />
            <span
                onClick={handleSpanClick}
                name={props.name}
                className={`custom-checkbox ${props.checked ? "is-checked" : ""}`}
                style={{ backgroundImage: props.checked ? `url(${check})` : "" }}
            ></span>
        </div>
    );
};

Checkbox.defaultProps = {
    id: uuid(),
    checked: false,
    required: false,
};

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
