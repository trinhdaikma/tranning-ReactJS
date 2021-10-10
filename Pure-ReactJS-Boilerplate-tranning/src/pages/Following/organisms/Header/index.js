import React from "react";
import HeaderLeft from "../../molecules/mcHeader/HeaderLeft";
import HeaderForm from "../../molecules/mcHeader/HeaderForm";
import HeaderRight from "../../molecules/mcHeader/HeaderRight";

import "./style.scss";

function Header() {
  return (
    <div className="Header_wrapper">
      <HeaderLeft />
      <HeaderForm />
      <HeaderRight />
    </div>
  );
}

export default Header;
