import React from "react";
import projects from "../projects";
import ProjectListItem from "./ProjectListItem";

function ProjectList() {
  console.log(projects); // [{}, {}, {}, {}]
  // functions to call on lists
  // find / filter / map / reduce / forEach
  // [{},{},{},{}]
  // [] - Make a new Array

  const projectsLis = projects.map((projObj) => {
    // ProjectListItem({projObj: projObj})
    // Using the spread operator
    // Each obj is going to spread out its key value pairs
    // as properties
    return <ProjectListItem key={projObj.id} {...projObj} />;
  });

  // projectsLis = [<li>...</li>,<li>...</li>,<li>...</li>,<li>...</li>]
  // {/* [1,2,3,4,5] */}
  //       {/* 1 */}
  //       {/* 2 */}
  //       {/* 3 */}
  //       {/* {projects} -  [{}, {}, {}, {}] */}
  //       {/* {} */}
  //       {/* {} */}
  //       {/* <li>name</li> */}
  //       {/* <li>eri</li> */}
  //       {/* projectsLis = [<li>...</li>,<li>...</li>,<li>...</li>,<li>...</li>] */}

  return (
    <section>
      <h1>Project List:</h1>
      <ul className="cards">{projectsLis}</ul>
    </section>
  );
}

export default ProjectList;
