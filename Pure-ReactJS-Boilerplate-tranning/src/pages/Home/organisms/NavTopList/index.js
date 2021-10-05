import React from "react";
import NavBarTop from "../../molecules/NavBarTop";
import "./style.scss";

function NavTopList() {
  const navListTop = [
    {
      id: 1,
      icon: "item_icon fas fa-photo-video",
      title: "Cá Nhân"
    },
    {
      id: 2,
      icon: "item_icon far fa-stop-circle",
      title: "Khám phá"
    },
    {
      id: 3,
      icon: "item_icon fas fa-chart-line",
      title: "ZingChart"
    },
    {
      id: 4,
      icon: "item_icon fas fa-headphones-alt",
      title: "Radio"
    },
    {
      id: 5,
      icon: "item_icon far fa-list-alt",
      title: "Theo dõi"
    }
  ];
  const elmListTop = navListTop.map(list => (
    <NavBarTop key={list.id} icon={list.icon} title={list.title} />
  ));
  return <div className="NavTopList_wrappwer">{elmListTop}</div>;
}

export default NavTopList;
