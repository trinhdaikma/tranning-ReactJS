import React, { useState } from "react";
import "./style.scss";

function HeaderInput() {
  const [value, setValue] = useState("");

  const handleValueChange = event => {
    setValue(event.target.value);
  };
  return (
    <div className="HeaderInput_wrapper">
      <input
        className="search_input"
        type="text"
        placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
}

export default HeaderInput;
