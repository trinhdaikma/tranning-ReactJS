import React from "react";
import BtnSearch from "../../../atoms/atHeader/BtnSearch";
import Input from "../../../atoms/atHeader/Input";
import "./style.scss";

function HeaderForm() {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="HeaderForm_wraper">
      <form className="form" onSubmit={handleSubmit}>
        <BtnSearch />
        <Input />
      </form>
    </div>
  );
}

export default HeaderForm;
