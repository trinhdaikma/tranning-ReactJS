import React from "react";
import NextIcon from "../../atoms/NextIcon";
import PrevIcon from "../../atoms/PrevIcon";
import "./style.scss";

function ContentIcon() {
  return (
    <div className="ContentIcon_wrapper">
      <PrevIcon />
      <NextIcon />
    </div>
  );
}

export default ContentIcon;
