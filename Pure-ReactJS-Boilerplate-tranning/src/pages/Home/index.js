import React from "react";
import Content from "./organisms/Content";
import Header from "./organisms/Header";
import NavBar from "./organisms/NavBar";
import PlayerMusic from "./organisms/PlayerMusic";
import "./index.scss";

function Home() {
  return (
    <div className="Home_wrapper">
      <Header />
      <NavBar />
      <Content />
      <PlayerMusic />
    </div>
  );
}

export default Home;
