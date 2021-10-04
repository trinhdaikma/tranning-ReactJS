import React from "react";
import "./style.scss";

function NavBarItemTitle(props) {
  return (
    <div className="NavBarItemTitle">
      <p className="nav_title">{props.title}</p>
    </div>
  );
}

export default NavBarItemTitle;
