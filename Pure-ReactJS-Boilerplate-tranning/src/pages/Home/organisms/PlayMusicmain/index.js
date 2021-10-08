import React from "react";
import PlayMusicCenter from "../PlayMusicCenter";
import PlayMusicLeft from "../PlayMusicLeft";
import PlayMusicRight from "../PlayMusicRight";
import "./style.scss";

function PlayMusicMain() {
  return (
    <div className="PlayMusicMain_wraper">
      <PlayMusicLeft />
      <PlayMusicCenter />
      <PlayMusicRight />
    </div>
  );
}

export default PlayMusicMain;
