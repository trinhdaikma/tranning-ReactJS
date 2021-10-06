import React from "react";
import "./style.scss";
import NavBarItemIcon from "../../atoms/NavBarItemIcon";
import NavBarItemTitle from "../../atoms/NavBarItemTitle";

function NavBarTop(props) {
  return (
    <ul className="NavBarTop_wrapper">
      <li className="navbar_item">
        <NavBarItemIcon icon={props.icon} />
        <NavBarItemTitle title={props.title} />
      </li>
    </ul>
  );
}

export default NavBarTop;
