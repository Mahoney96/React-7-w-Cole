import React, { useState } from "react";
import styleHoc from "../HOCS/styleHOC";

const ToggleRenderProps = (props) => {
  const [on, setOn] = useState(false);
  const { style } = props;

  return <div>{props.render({ on, setOn, style })}</div>;
};

export default styleHoc(ToggleRenderProps);