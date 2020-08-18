import React from "react";
import styleHOC from "./styleHOC";
import authHoc from './authHoc'

const Square = (props) => {
  return (
    <div {...props} style={{ ...props.style, width: "100px", height: "100px" }}>
      HELLO I AM A SQUARE
    </div>
  );
};
export default authHoc(styleHOC(Square));