import React from "react";
import Slider from "../../molecules/Slider";
import PlayListSong from "../PlayListSong";
import "./style.scss";

function Content() {
  return (
    <div className="Content_wrapper">
      <Slider />
      <PlayListSong />
      <PlayListSong />
      <PlayListSong />
    </div>
  );
}

export default Content;
