import React from "react";
import ListItemScroll from "../../../molecules/mcNavBarLeft/ListItemScroll";
import "./style.scss";

function NavScroll() {
  return (
    <div className="NavScroll_wraper">
      <ListItemScroll />
      <ListItemScroll />
    </div>
  );
}

export default NavScroll;
