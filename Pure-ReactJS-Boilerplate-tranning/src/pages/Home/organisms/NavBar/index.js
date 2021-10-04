import React from "react";
import "./style.scss";
import Logo from "../../atoms/Logo";
import NavBarList from "../../molecules/NavBarList";

function NavBar() {
  const navList = [
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
      id: 3,
      icon: "item_icon fas fa-headphones-alt",
      title: "Radio"
    },
    {
      id: 3,
      icon: "item_icon far fa-list-alt",
      title: "Theo dõi"
    }
  ];
  const elmList = navList.map(list => (
    <NavBarList key={list.id} icon={list.icon} title={list.title} />
  ));
  return (
    <div className="NavBar">
      <Logo />
      {elmList}
    </div>
  );
}

export default NavBar;
