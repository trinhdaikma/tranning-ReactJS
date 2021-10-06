import React from "react";
import ImageZing from "../../atoms/ImageZing";
import NavBottom from "../../molecules/NavBottom";
import "./style.scss";

function NavBottomList() {
  const navListBottom = [
    {
      id: 1,
      icon: "icon_bottom fas fa-music",
      title: "Nhạc mới"
    },
    {
      id: 2,
      icon: "icon_bottom fas fa-icons",
      title: "Thể loại"
    },
    {
      id: 3,
      icon: "icon_bottom fas fa-star",
      title: "Top 100 MV"
    },
    {
      id: 4,
      icon: "icon_bottom fas fa-compact-disc",
      title: "Radio"
    },
    {
      id: 5,
      icon: "icon_bottom fas fa-icons",
      title: "Bài hát"
    },
    {
      id: 6,
      icon: "icon_bottom fas fa-icons",
      title: "Tổng hợp"
    },
    {
      id: 7,
      icon: "icon_bottom fas fa-icons",
      title: "Gần đây"
    },
    {
      id: 8,
      icon: "icon_bottom fas fa-icons",
      title: "Playsist"
    },
    {
      id: 9,
      icon: "icon_bottom fas fa-icons",
      title: "Yêu thích"
    },
    {
      id: 10,
      icon: "icon_bottom fas fa-icons",
      title: "Theo dõi"
    }
  ];

  const elmListBottom = navListBottom.map(listBT => (
    <NavBottom key={listBT.id} icon={listBT.icon} title={listBT.title} />
  ));

  return (
    <div className="NavBottomList_wrapper">
      <ImageZing />
      {elmListBottom}
    </div>
  );
}

export default NavBottomList;
