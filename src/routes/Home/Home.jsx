import React from "react";
import "./Home.css";

function Heading() {
  return (
  <div className="heading">
    <div className="text-display">
      <h1 className="nametag">William Knapp</h1>
      <p className="title">Java and Web Developer</p>
      <a className="btn" href="contact">Hire Me</a>
    </div>
  </div>);
}

export default Heading;
