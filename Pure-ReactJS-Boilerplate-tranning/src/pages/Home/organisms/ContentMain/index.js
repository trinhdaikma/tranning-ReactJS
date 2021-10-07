import React from "react";
import Slider from "../../molecules/Slider";
import PlayListSong from "../PlayListSong";
// import PlayListSong from "../PlayListSong";

import "./style.scss";

function ContentMain() {
  return (
    <div className="ContentMain_wrapper">
      <Slider />
      <PlayListSong />
      <PlayListSong />
      <PlayListSong />
    </div>
  );
}

export default ContentMain;
