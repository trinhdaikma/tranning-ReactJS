import React from "react";
import Singer from "../../atoms/Singer";
import TitleSong from "../../atoms/TitleSong";
import "./style.scss";

function SongItemDesc(props) {
  return (
    <div className="SongItemDesc_wrapper">
      <TitleSong title={props.title} />
      <Singer singer={props.singer} />
    </div>
  );
}

export default SongItemDesc;
