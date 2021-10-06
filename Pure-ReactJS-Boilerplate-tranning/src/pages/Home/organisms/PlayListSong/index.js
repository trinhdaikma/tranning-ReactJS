import React from "react";
import ListTitle from "../../atoms/ListTitle";
import ListSong from "../ListSong";
import "./style.scss";

function PlayListSong(props) {
  return (
    <div className="PlayListSong_wrapper">
      <ListTitle title={props.title} />
      <ListSong />
    </div>
  );
}

export default PlayListSong;
