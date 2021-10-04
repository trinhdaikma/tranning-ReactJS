import React from "react";
import HeaderIcon from "../../atoms/HeaderIcon";
import "./style.scss"

function HeaderIconRight(props) {
  return (
    <div className="HeaderIconRight_wrapper">
      <HeaderIcon icon={props.icon} />
    </div>
  );
}

export default HeaderIconRight;
