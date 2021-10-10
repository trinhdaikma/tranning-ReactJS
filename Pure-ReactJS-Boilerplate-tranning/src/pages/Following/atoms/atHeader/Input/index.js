import React, { useState } from "react";
import "./style.scss";

function Input() {
  const [value, setValue] = useState("");

  const handleInputChange = e => {
    setValue(e.target.value);
  };
  return (
    <input
      className="Input_wrapper"
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="Nhập tên bài hát, Nhạc sĩ hoặc MV..."
    />
  );
}

export default Input;
