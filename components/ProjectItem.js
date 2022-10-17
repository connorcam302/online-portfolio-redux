import React from "react";
import projectStyles from "../styles/Project.module.css";
import Link from "next/link";

const ProjectItem = ({ project }) => {
  return (
    <Link href="/project/[id]" as={`/project/${project.id}`}>
      <a className={projectStyles.card}>
        <h3>{project.name} &rarr;</h3>
        <p>Langauges: {project.languages.join(", ")}</p>
        <p>Skills: {project.skills.join(", ")}</p>
      </a>
    </Link>
  );
};

export default ProjectItem;
