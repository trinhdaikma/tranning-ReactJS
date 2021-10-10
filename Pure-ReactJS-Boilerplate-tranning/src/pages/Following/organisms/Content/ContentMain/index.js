import React from "react";
import Box1 from "../../../molecules/mcContent/Box1";
import Box2 from "../../../molecules/mcContent/Box2";
import Box3 from "../../../molecules/mcContent/Box3";
import Box4 from "../../../molecules/mcContent/Box4";
import Box5 from "../../../molecules/mcContent/Box5";
import "./style.scss";

function ContentMain() {
  return (
    <div className="ContentMain_wrapper">
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
    </div>
  );
}

export default ContentMain;
