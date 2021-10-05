import React from "react";
import "./style.scss";
import NavBarItemIcon from "../../atoms/NavBarItemIcon";
import NavBarItemTitle from "../../atoms/NavBarItemTitle";

function NavBarTop(props) {
  return (
    <div className="NavBarTop_wrapper">
      <NavBarItemIcon icon={props.icon} />
      <NavBarItemTitle title={props.title} />
    </div>
  );
}

export default NavBarTop;
