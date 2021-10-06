import React from "react";
import Slider from "../../molecules/Slider";
import PlayListSong from "../PlayListSong";
import "./style.scss";

function ContentMain() {
  return (
    <div className="ContentMain_wrapper">
      <Slider />
      <PlayListSong title = "Nhạc mới nhất"/>
      <PlayListSong title = "HipHop Vibe"/>
      <PlayListSong title = "Top 100"/>
    </div>
  );
}

export default ContentMain;
