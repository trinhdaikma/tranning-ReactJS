import React from "react";
import "./style.scss";

function PlayBtnItem(props) {
  return (
    <div className="PlayBtnItem_wrapper">
      <i className={props.className}></i>
    </div>
  );
}

export default PlayBtnItem;
