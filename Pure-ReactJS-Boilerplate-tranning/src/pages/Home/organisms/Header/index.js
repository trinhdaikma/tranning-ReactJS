import React from "react";
import HeaderLeft from "../../molecules/HeaderLeft";
import HeaderRight from "../../molecules/HeaderRight";
import "./style.scss";

function Header() {
  return (
    <div className="Header_wrapper">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}

export default Header;
