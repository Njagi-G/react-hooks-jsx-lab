import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Passionate about connecting web developers to market opportunities</p>
      <img 
        src={ image }
        alt="I made this"
      />
    </div>
  );
}

export default About;
