import React from "./style.scss";

function CenterIcon() {
  return (
    <div className="CenterIcon_wrapper">
      <div className="center-item">
        <i className="center-icon fas fa-random"></i>
      </div>
      <div className="center-item">
        <i className="center-icon fas fa-step-backward"></i>
      </div>
      <div className="center-play">
        <i className="icon-play far fa-play-circle"></i>
      </div>
      <div className="center-item">
        <i className="center-icon fas fa-step-forward"></i>
      </div>
      <div className="center-item">
        <i className="center-icon fas fa-retweet"></i>
      </div>
    </div>
  );
}

export default CenterIcon;
