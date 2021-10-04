import React from "react";
import "./style.scss";

function NavBarItemIcon(props) {
  return (
    <div className="NavBarItemIcon_wrapper">
      <i className={props.icon}></i>
    </div>
  );
}

export default NavBarItemIcon;
