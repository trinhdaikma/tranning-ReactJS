import React from "react";
import SongItemDesc from "../SongItemDesc";
import SongItemImg from "../SongItemImg";
import "./style.scss";

function SongItem(props) {
  return (
    <div className="SongItem_wrapper">
      <SongItemImg image={props.image} />
      <SongItemDesc title={props.title} singer={props.singer} />
    </div>
  );
}

export default SongItem;
