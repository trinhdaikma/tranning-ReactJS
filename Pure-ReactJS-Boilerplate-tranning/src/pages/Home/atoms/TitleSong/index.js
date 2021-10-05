import React from "react";
import "./style.scss";

function TitleSong(props) {
  return (
    <div className="TitleSong_wrapper">
      <h4>{props.title}</h4>
    </div>
  );
}

export default TitleSong;
