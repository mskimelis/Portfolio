import React from "react";
import "./css/NavBar.css";

const NavBar = () => (
  <div className="Navigation">
    <a href="#top" className="btn">
      HOME
    </a>
    <a href="/" className="btn">
      ABOUT
    </a>
    <a href="/" className="btn">
      PROJECTS
    </a>
    <a href="/" className="btn">
      CONTACT
    </a>
  </div>
);

export default NavBar;
