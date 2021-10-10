import React from "react";
import "./style.scss";
import { navItems } from "../../../../dataSource/dataFollowing";
import IconNavList from "../../../atoms/atNavBarLeft/IconNavList";
import TitleNavList from "../../../atoms/atNavBarLeft/TitleNavList";

function ListItem() {
  const listItem = navItems.map(item => (
    <li className={item.cName} key={item.id}>
      <IconNavList icon={item.icon} />
      <TitleNavList title={item.title} />
    </li>
  ));
  return <ul className="ListItem_wrapper">{listItem}</ul>;
}

export default ListItem;
