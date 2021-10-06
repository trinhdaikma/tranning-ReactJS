import React from "react";
import PlayLeftIcon from "../../atoms/PlayLeftIcon";
import PlayLeftOption from "../../atoms/PlayLeftOption";
import "./style.scss";

function PlayLeftBtn() {
  return (
    <div className="PlayLeftBtn_wrapper">
      <PlayLeftIcon />
      <PlayLeftOption />
    </div>
  );
}

export default PlayLeftBtn;
