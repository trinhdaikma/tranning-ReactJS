import React from "react";
import NewItemIcon from "../../../atoms/atNavBarLeft/NewItemIcon";
import NewItemTitle from "../../../atoms/atNavBarLeft/NewItemTitle";
import "./style.scss";

function NewListAdd() {
  return (
    <div className="NewListAdd_wrapper">
      <NewItemIcon />
      <NewItemTitle />
    </div>
  );
}

export default NewListAdd;
