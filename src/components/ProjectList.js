import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="projects-container"> {}
        {projects && projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;