import React from "react";
import HeaderBtnSearch from "../../atoms/HeaderBtnSearch";
import HeaderInput from "../../atoms/HeaderInput";
import "./style.scss";

function HeaderForm() {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <div className="HeaderForm_wrapper">
      <form onSubmit={handleSubmit}>
        <HeaderInput />
        <HeaderBtnSearch />
      </form>
    </div>
  );
}

export default HeaderForm;
