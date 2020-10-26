import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./DropDownMenu.scss";

import { findOrCreateRoot } from "lib/dom";

const ddRoot = findOrCreateRoot("dd-root");

class DDWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    ddRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    ddRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

DDWrapper.propTypes = {};

const DropDownMenu = (props) => {
  const [absolutePositioning, setAbsolutePositioning] = useState();

  useEffect(() => {
    if (props.isAbsolute && props.position) {
      setAbsolutePositioning({
        position: "absolute",
        top: !!props.position.top && props.position.top,
        right: !!props.position.right && props.position.right,
        bottom: !!props.position.bottom && props.position.bottom,
        left: !!props.position.left && props.position.left,
        width: !!props.position.width && props.position.width,
        padding: 0,
      });
    }
  }, []);

  const handleClickOutside = (e) => {
    let ddBG = document.getElementById("dd-bg");
    if (e.target !== ddBG) return;
    if(!!props.closeDD) props.closeDD();
  };

  return (
    <div
      className={`drop-down-menu white--bg v-container js as 
        ${props.isPopOver ? "pop-over-menu" : "normal"}
        ${props.isRelative ? "relative-dropdown" : ''}
        ${props.selectDropdown ? "select-dropdown" : null}`}
      style={props.isAbsolute && absolutePositioning}
    >
      {props.children}
      <div id="dd-bg" onClick={handleClickOutside}></div>
    </div>
  );
};

DropDownMenu.propTypes = {
  isPopOver: PropTypes.bool,
  children: PropTypes.any,
};

export default DropDownMenu;
