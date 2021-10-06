import React from "react";
import PlayNameMusic from "../../atoms/PlayNameMusic";
import PlayNameSinger from "../../atoms/PlayNameSinger";
import "./style.scss";

function PlayLeftDesc() {
  return (
    <div className="PlayLeftDesc_wrapper">
      <PlayNameMusic />
      <PlayNameSinger />
    </div>
  );
}

export default PlayLeftDesc;
