import React from "react";
import PlayLeftBtn from "../../molecules/PlayLeftBtn";
import PlayMusicLeftInfo from "../../molecules/PlayMusicLeftInfo";
import "./style.scss";

function PlayMusicLeft() {
  return (
    <div className="PlayMusicLeft_wrapper">
      <PlayMusicLeftInfo />
      <PlayLeftBtn />
    </div>
  );
}

export default PlayMusicLeft;
