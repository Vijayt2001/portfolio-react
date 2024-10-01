import React from "react";
import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Vijayt2001/2D-Tank-War-Game"
          h3="Vbiberr"
          p="Social Media APP"
        />

        <ProjectCard
          src={viberr}
          link="https://github.com/Vijayt2001/2D-Tank-War-Game"
          h3="Vbiberr"
          p="Social Media APP"
        />

        <ProjectCard
          src={viberr}
          link="https://github.com/Vijayt2001/2D-Tank-War-Game"
          h3="Viberr"
          p="Social Media APP"
        />
      </div>
    </section>
  );
}

export default Projects;
