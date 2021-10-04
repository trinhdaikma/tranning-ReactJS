import React from "react";
import "./style.scss";

function SliderImage(props) {
  return (
    <div className="SliderImage_wrapper">
      <img src={props.image} alt="" className="slider_img" />
    </div>
  );
}

export default SliderImage;
