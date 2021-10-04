import React from "react";
import ItemSongImage from "../../atoms/ItemSongImage";
import Singer from "../../atoms/Singer";
import TitleSong from "../../atoms/TitleSong";
import "./style.scss";

function SongItem(props) {
  return (
    <div className="SongItem_wrapper">
      <ItemSongImage image={props.image} />
      <TitleSong title={props.title} />
      <Singer singer={props.singer} />
    </div>
  );
}

export default SongItem;
