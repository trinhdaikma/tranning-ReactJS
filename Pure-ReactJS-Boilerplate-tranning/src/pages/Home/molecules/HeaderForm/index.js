import React from "react";
import HeaderBtnSearch from "../../atoms/HeaderBtnSearch";
import HeaderInput from "../../atoms/HeaderInput";
import "./style.scss";

function HeaderForm() {
  return (
    <div className="HeaderForm_wrapper">
      <form>
        <HeaderInput />
        <HeaderBtnSearch />
      </form>
    </div>
  );
}

export default HeaderForm;
