import React from "react";
import NavBottomIcon from "../../atoms/NavBottomIcon";
import NavBottomTitle from "../../atoms/NavBottomTitle";
import "./style.scss";


function NavBottom(props) {
  return (
    <div className="NavBottom_wrapper">
      <NavBottomIcon icon={props.icon}/>
      <NavBottomTitle title={props.title}/>
    </div>
  );
}

export default NavBottom;
