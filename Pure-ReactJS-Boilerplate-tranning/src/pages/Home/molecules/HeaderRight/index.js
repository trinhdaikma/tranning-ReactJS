import React from "react";
import HeaderAvatar from "../../atoms/HeaderAvatar";
import HeaderIconRight from "../HeaderIconRight";
import "./style.scss";

function HeaderRight() {
  const icons = [
    { id: 1, icon: "icon_circle fas fa-tshirt" },
    { id: 1, icon: "icon_circle fas fa-level-up-alt" },
    { id: 1, icon: "icon_circle fas fa-cog" }
  ];
  const elmIconRight = icons.map(icon => (
    <HeaderIconRight key={icon.id} icon={icon.icon} />
  ));
  return (
    <div className="HeaderRight_wrapper">
      {elmIconRight}
      <HeaderAvatar />
    </div>
  );
}

export default HeaderRight;
