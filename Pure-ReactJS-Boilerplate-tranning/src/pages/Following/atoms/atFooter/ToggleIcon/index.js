import { useState } from "react";
import ListMusic from "../../atNavBarRight/ListMusic";
import "./style.scss";

function ToggleIcon() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="ToggleIcon_wrapper">
      <i
        className={
          sidebar
            ? "toggle-icon active far fa-list-alt"
            : "toggle-icon far fa-list-alt"
        }
        onClick={showSidebar}
      ></i>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ListMusic />
      </nav>
    </div>
  );
}

export default ToggleIcon;
