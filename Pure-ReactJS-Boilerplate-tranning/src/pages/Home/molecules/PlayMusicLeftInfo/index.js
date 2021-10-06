import React from "react";
import PlayMusicLeftImage from "../../atoms/PlayMusicLeftImage";
import PlayLeftDesc from "../PlayLeftDesc";
import "./style.scss";

function PlayMusicLeftInfo() {
  return (
    <div className="PlayMusicLeftInfo_wrapper">
      <PlayMusicLeftImage />
      <PlayLeftDesc />
    </div>
  );
}

export default PlayMusicLeftInfo;
