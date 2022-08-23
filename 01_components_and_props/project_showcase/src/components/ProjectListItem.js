import React from "react";

function ProjectListItem({ id, name, image, phase, about, link }) {
  // const { id, name, image } = props;
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps">👏0</button>
      </figure>
      <section>
        <h4>{name}</h4>
        <p>{about}</p>
        <p>
          <a href={link}>link</a>
        </p>
      </section>
      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
}

export default ProjectListItem;
