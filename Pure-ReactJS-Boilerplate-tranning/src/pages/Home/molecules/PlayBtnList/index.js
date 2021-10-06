import React from "react";
import PlayBtnMusic from "../../atoms/PlayBtnMusic";
import PlayBtnItem from "../../atoms/PlayBtnItem";
import "./style.scss";

function PlayBtnList() {
  return (
    <div className="PlayBtnList_wrapper">
      <PlayBtnItem className="icon_play fas fa-random" />
      <PlayBtnItem className="icon_play fas fa-step-backward" />
      <PlayBtnMusic />
      <PlayBtnItem className="icon_play fas fa-step-forward" />
      <PlayBtnItem className="icon_play fas fa-exchange-alt" />
    </div>
  );
}

export default PlayBtnList;
