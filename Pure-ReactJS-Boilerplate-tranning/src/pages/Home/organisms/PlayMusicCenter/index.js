import React from "react";
import InputRange from "../../atoms/InputRange";
import PlayBtnList from "../../molecules/PlayBtnList";
import "./style.scss";

function PlayMusicCenter() {
  return (
    <div className="PlayMusicCenter_wrapper">
      <PlayBtnList />
      <InputRange />
    </div>
  );
}

export default PlayMusicCenter;
