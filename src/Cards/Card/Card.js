import React from "react";
import PropTypes from 'prop-types'
import './Card.scss'

const Card = props => {
  return (
    <div className={`card white--bg ${props.cardClasses}`}>
      {props.children}
    </div>
  )
};

Card.propTypes = {
  cardClasses: PropTypes.string,
  children: PropTypes.any,
}

export default Card;
