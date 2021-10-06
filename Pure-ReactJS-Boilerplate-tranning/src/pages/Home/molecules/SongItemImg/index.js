import React from "react";
import ItemSongImage from "../../atoms/ItemSongImage";
import Visibility from "../Visibility";
import "./style.scss";

function SongItemImg(props) {
  return (
    <div className="SongItemImg_wrapper">
      <ItemSongImage image={props.image} />
      <Visibility />
    </div>
  );
}

export default SongItemImg;
