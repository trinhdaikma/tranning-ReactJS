import React from "react";
import ListSongTop from "../../molecules/ListSongTop";
import ListSong from "../ListSong";
import "./style.scss";

function PlayListSong() {
  return (
    <div className="PlayListSong_wrapper">
      <ListSongTop />
      <ListSong />
    </div>
  );
}

export default PlayListSong;
