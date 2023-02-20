import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <NavBar />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
