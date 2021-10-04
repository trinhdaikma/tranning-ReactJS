import React from "react";
import "./style.scss";
import NavBarItemIcon from "../../atoms/NavBarItemIcon";
import NavBarItemTitle from "../../atoms/NavBarItemTitle";

function NavBarList(props) {
  return (
    <div className="NavBarList_wrapper">
      <NavBarItemIcon icon={props.icon} />
      <NavBarItemTitle title={props.title} />
    </div>
  );
}

export default NavBarList;
