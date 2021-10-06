import React from "react";
import PlayBtnMusic from "../../atoms/PlayBtnMusic";
import PlayLeftIcon from "../../atoms/PlayLeftIcon";
import PlayLeftOption from "../../atoms/PlayLeftOption";
import "./style.scss";

function Visibility() {
  return (
    <div className="Visibility_wrapper">
      <PlayLeftIcon />
      <PlayBtnMusic />
      <PlayLeftOption />
    </div>
  );
}

export default Visibility;
