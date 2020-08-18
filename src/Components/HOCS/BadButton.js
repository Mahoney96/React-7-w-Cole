import React from "react";
import styleHOC from "./styleHOC";

const GoodButton = (props) => {
  return (
    <button {...props} style={props.style}>
      I'm a Good Button
    </button>
  );
};

export default styleHOC(GoodButton)