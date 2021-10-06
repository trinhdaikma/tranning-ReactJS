import React from "react";
import "./style.scss";

function Singer(props) {
  return (
    <div className="Singer_wrapper">
      <p>{props.singer}</p>
    </div>
  );
}

export default Singer;
