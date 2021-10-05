import React from "react";
import "./style.scss";

function NavBottomTitle(props) {
  return (
    <div className="NavBottomTitle_wrapper">
      <p className="title">{props.title}</p>
    </div>
  );
}

export default NavBottomTitle;
