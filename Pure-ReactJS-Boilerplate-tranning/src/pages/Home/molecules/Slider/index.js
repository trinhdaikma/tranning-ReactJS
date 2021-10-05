import React from "react";
import NextSiler from "../../atoms/NextSlider";
import PreSiler from "../../atoms/PreSlider";
import SliderImage from "../../atoms/SliderImage";
import "./style.scss";

function Slider() {
  const images = [
    {
      id: 1,
      image:
        "https://photo-zmp3.zadn.vn/banner/d/0/0/a/d00ab9e6422e696412f49bba128c8d3d.jpg"
    },
    {
      id: 2,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/b/b/d/cbbdfde4559acd3951a894648f543cd0.jpg"
    },
    {
      id: 3,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/8/2/b/282bb538713d645ce39769529c62f845.jpg"
    }
  ];
  const elmImage = images.map(image => (
    <SliderImage key={image.id} image={image.image} />
  ));
  return (
    <div className="Slider_wrapper">
      <PreSiler />
      {elmImage}
      <NextSiler />
    </div>
  );
}

export default Slider;
