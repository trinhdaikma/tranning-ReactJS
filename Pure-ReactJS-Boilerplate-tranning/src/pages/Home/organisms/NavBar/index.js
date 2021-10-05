import React from "react";
import "./style.scss";
import Logo from "../../atoms/Logo";
import NavBottomList from "../NavBottomList";
import NavTopList from "../NavTopList";
import Line from "../../atoms/Line";

function NavBar() {
  return (
    <div className="NavBar">
      <Logo />
      <NavTopList />
      <Line />
      <NavBottomList />
    </div>
  );
}

export default NavBar;
