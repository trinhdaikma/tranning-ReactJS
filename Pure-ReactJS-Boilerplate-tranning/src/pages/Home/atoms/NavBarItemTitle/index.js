import React from "react";
import "./style.scss";

function NavBarItemTitle(props) {
  return (
      <p className="NavBarItemTitle_wrapper">{props.title}</p>
  );
}

export default NavBarItemTitle;
