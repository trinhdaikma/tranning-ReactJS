import React from "react";
import ContentTitle from "../../atoms/ContentTitle";
import ContentIcon from "../ContentIcon";
import "./style.scss";

function ListSongTop() {
  return (
    <div className="ListSongTop_wrapper">
      <ContentTitle />
      <ContentIcon />
    </div>
  );
}

export default ListSongTop;
