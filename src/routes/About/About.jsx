import React from "react";
import "./About.css";
import AboutInfo from "./aboutInfo";

function About() {
  return (
    <div>
      <h1>{AboutInfo.textOne}</h1>
      <p>{AboutInfo.textTwo}</p>
      <p>{AboutInfo.textThree}</p>
    </div>
  )
}

export default About;
