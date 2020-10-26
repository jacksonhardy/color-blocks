import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

const TextInput = React.forwardRef((props, ref) => {
    const handleValueChange = (e) => {
        props.onChange(e);
    };

    const [inputId, setInputId] = useState("");

    useEffect(() => {
        if (props.id) {
            setInputId(props.id);
        } else if (!props.id) {
            let newId = uuid();
            setInputId(newId);
        }
    }, [props.id]);

    const handleBlur = (e) => {
        props.handleBlur && props.handleBlur(e);
    };

    const handleFocus = (e) => {
        props.handleFocus && props.handleFocus(e);
    };

    return (
        <input
            name={props.name}
            id={inputId}
            className='text-input input'
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleValueChange}
            type={props.type}
            required={props.required}
            disabled={props.disabled}
            autoComplete={props.autoComplete}
            checked={false}
            max={props.max}
            maxLength={props.maxLength}
            min={props.min}
            minLength={props.minLength}
            pattern={props.pattern}
            step={props.step}
            ref={ref}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={props.onKeyDown}
        />
    );
});

TextInput.defaultProps = {
    value: "",
    disabled: false,
    required: false,
    type: "text",
};

TextInput.propTypes = {
    autoComplete: PropTypes.string,
    handleValueChange: PropTypes.func,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    max: PropTypes.number,
    maxLength: PropTypes.number,
    min: PropTypes.number,
    minLength: PropTypes.number,
    name: PropTypes.string,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    step: PropTypes.number,
    type: PropTypes.string,
};

export default TextInput;
