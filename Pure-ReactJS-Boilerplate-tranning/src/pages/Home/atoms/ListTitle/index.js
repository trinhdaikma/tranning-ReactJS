import React from "react";
import "./style.scss";

function ListTitle(props) {
  return (
    <div className="ListTitle_wrapper">
      <h3 className="title">{props.title}</h3>
    </div>
  );
}

export default ListTitle;
