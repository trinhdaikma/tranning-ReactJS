import React from "react";
import PlayBtnList from "../../molecules/PlayBtnList";
import PlayMusicLeft from "../PlayMusicLeft";
import PlayMusicRight from "../PlayMusicRight";
import "./style.scss";

function PlayMusicMain() {
  return (
    <div className="PlayMusicMain_wraper">
      <PlayMusicLeft />
      <PlayBtnList />
      <PlayMusicRight />
    </div>
  );
}

export default PlayMusicMain;
