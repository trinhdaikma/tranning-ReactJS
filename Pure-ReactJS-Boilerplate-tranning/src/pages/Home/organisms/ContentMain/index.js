import React from "react";
import Slider from "../Slider";
import PlayListSong from "../PlayListSong";
import "./style.scss";
import ContentSingerList from "../ContentSingerList";

function ContentMain() {
  return (
    <div className="ContentMain_wrapper">
      <Slider />
      <PlayListSong />
      <PlayListSong />
      <ContentSingerList />
      <PlayListSong />
    </div>
  );
}

export default ContentMain;
