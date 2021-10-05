import React from "react";
import ListTitle from "../../atoms/ListTitle";
import ListSong from "../ListSong";
import "./style.scss";

function PlayListSong() {
  return (
    <div className="PlayListSong_wrapper">
      <ListTitle />
      <ListSong />
    </div>
  );
}

export default PlayListSong;
