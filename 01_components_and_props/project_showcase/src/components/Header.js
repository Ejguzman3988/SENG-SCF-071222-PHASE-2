import React from "react";
import projects from "../projects";
console.log(projects);

function Header() {
  return (
    <header>
      <h1>
        <span className="logo">{"SCF x // "}</span> Project Showcase
        <div>Projects: {projects.length}</div>
      </h1>
      <nav>
        <button>Light Mode</button>
      </nav>
    </header>
  );
}

export default Header;
