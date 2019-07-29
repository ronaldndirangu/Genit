import React from "react";
import PropTypes from "prop-types";

const CaretUp = props => (
  <svg width={props.size} height={props.size} viewBox="0 0 14 9" {...props}>
    <path
      fill={props.color}
      stroke={props.color}
      d="M13.5,7.4c0,0.4-0.3,0.7-0.7,0.7c-0.2,0-0.4-0.1-0.5-0.2L7.5,3.1L2.7,7.9c-0.3,0.3-0.7,0.3-1,0c0,0,0,0,0,0
        c-0.3-0.3-0.3-0.7,0-1c0,0,0,0,0,0L7,1.6c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.4,0.1,0.5,0.2l5.3,5.3C13.4,7,13.5,7.2,13.5,7.4L13.5,7.4
        z"
    />
  </svg>
);

CaretUp.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.oneOfType(Object)
};

CaretUp.defaultProps = {
  height: "8px",
  width: "15px",
  color: "#ffffff"
};

export default CaretUp;
