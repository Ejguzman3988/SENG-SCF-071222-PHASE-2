import React, { useState } from "react";
import projects from "../projects";
console.log(projects);

function Header() {
  const [toggle, setToggle] = useState(false)

  const toggleSwitch = (e) => {
    setToggle(!toggle) // Async 
  }

  return (
    <header>
      <h1>
        <span className="logo">{"SCF x // "}</span> Project Showcase
        <div>Projects: {projects.length}</div>
      </h1>
      <nav>
        <button onClick={toggleSwitch}>{toggle ? "Light Mode" : "Dark Mode"}</button>
      </nav>
    </header>
  );
}

export default Header;
