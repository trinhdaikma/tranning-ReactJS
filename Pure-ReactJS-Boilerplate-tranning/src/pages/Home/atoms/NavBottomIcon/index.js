import React from "react";
import "./style.scss";

function NavBottomIcon(props) {
  return (
    <div className="NavBottomIcon_wrapper">
      <i className={props.icon}></i>
    </div>
  );
}

export default NavBottomIcon;
