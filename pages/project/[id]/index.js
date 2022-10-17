import React from "react";
import Link from "next/link";

const project = ({ project }) => {

  return (
    <>
      <h1>{project.name}</h1>
      <p>Langauges: {project.languages.join(", ")}</p>
      <p>Skills: {project.skills.join(", ")}</p>
      <Link href="/">Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/projects/${context.params.id}`
  );

  const project = await res.json();
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
    const res = await fetch(
        `http://localhost:3000/api/projects/all`
      );
    
      const project = await res.json();
      const ids = project.map(project => project.id)
      const paths = ids.map(id =>({params:{id:id.toString()}}))
      return {
        paths,
        fallback:false
      }
}

export default project;
