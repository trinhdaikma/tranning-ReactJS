import React from "react";
import HeaderArrowLeft from "../../atoms/HeaderArrowLeft";
import HeaderArrowRight from "../../atoms/HeaderArrowRight";
import HeaderForm from "../HeaderForm";
import "./style.scss";

function HeaderLeft() {
  return (
    <div className="HeaderLeft_wrapper">
      <HeaderArrowLeft />
      <HeaderArrowRight />
      <HeaderForm />
    </div>
  );
}

export default HeaderLeft;
