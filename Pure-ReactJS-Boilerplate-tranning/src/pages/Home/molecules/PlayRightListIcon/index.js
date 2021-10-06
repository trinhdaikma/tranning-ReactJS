import React from "react";
import PlayRightIcon from "../../atoms/PlayRightIcon";
import "./style.scss";

function PlayRightListIcon() {
  const rightIcons = [
    {
      id: 1,
      icon: "fas fa-compact-disc"
    },
    {
      id: 2,
      icon: "fas fa-microphone"
    },
    {
      id: 3,
      icon: "far fa-window-restore"
    },
    {
      id: 4,
      icon: "fas fa-volume-up"
    }
  ];
  const rightIcon = rightIcons.map(icon => (
    <PlayRightIcon key={icon.id} rightIcon={icon.icon} />
  ));
  return <div className="PlayRightListIcon">{rightIcon}</div>;
}

export default PlayRightListIcon;
