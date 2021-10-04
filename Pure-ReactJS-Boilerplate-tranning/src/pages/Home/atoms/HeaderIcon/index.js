import React from "react";
import "./style.scss";

function HeaderIcon(props) {
  return (
    <div className="HeaderIcon_wrapper">
      <i className={props.icon}></i>
    </div>
  );
}

export default HeaderIcon;
