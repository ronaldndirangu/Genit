import React from "react";
import PropTypes from "prop-types";

const CaretDown = props => (
  <svg width={props.size} height={props.size} viewBox="0 0 14 9" {...props}>
    <path
      fill={props.color}
      stroke={props.color}
      d="M1.467 2.134a.702.702 0 0 1 1.2-.506l4.803 4.79 4.79-4.79a.702.702 0 0 1 .998 0 .702.702 0 0 1 0 .999L7.975 7.922a.696.696 0 0 1-.505.203.751.751 0 0 1-.506-.203L1.67 2.627a.688.688 0 0 1-.202-.493z"
    />
  </svg>
);

CaretDown.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.oneOfType(Object)
};

CaretDown.defaultProps = {
  height: "8px",
  width: "15px",
  color: "#ffffff"
};

export default CaretDown;
