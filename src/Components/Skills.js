import React from "react";
import "./css/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2> <br />
      <p>
        While I was studying, I have learned different programming languages
        such as:
      </p>
      <br />
      <div className="item">
        <img src="{ meter1 }" alt="yes" />
        <h5>HTML</h5>
      </div>
      <div className="item">
        <img src="{ meter2 }" alt="yes" />
        <h5>CSS</h5>
      </div>
      <div className="item">
        <img src="{meter3}" alt="yes" />
        <h5>JavaScript</h5>
      </div>
      <div className="item">
        <img src="{meter1}" alt="yes" />
        <h5>React</h5>
      </div>
    </div>
  );
};
export default Skills;
