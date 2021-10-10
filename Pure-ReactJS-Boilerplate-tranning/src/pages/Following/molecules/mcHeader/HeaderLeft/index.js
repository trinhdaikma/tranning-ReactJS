import React from "react";
import PrevIcon from "../../../atoms/atHeader/PreIcon";
import NextIcon from "../../../atoms/atHeader/NextIcon";
import "./style.scss";

function HeaderLeft() {
  return (
    <div className="HeaderLeft_wrapper">
      <PrevIcon />
      <NextIcon />
    </div>
  );
}

export default HeaderLeft;
