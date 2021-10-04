import React, { useState } from "react";
import "./style.scss";

function HeaderInput() {
  const [textSearch, setTextSearch] = useState("");

  const handleChange = event => {
    setTextSearch(event.target.value);
  };
  return (
    <div className="HeaderInput_wrapper">
      <input
        className="search_input"
        type="text"
        placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
        value={textSearch}
        onChange={event => handleChange(event)}
      />
    </div>
  );
}

export default HeaderInput;
