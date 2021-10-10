import React from "react";
import Logo from "../../atoms/atNavBarLeft/Logo";
import NewListAdd from "../../molecules/mcNavBarLeft/AddNewList";
import NavList from "./NavList";
import NavScroll from "./NavScroll";
import "./style.scss";

function NavBarLeft() {
  return (
    <div className="NavBarLeft_wrapper">
      <Logo />
      <NavList />
      <NavScroll />
      <NewListAdd />
    </div>
  );
}

export default NavBarLeft;
