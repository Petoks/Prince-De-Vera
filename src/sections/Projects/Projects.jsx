import React from 'react'
import styles from './ProjectsStyles.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <p className={styles.noProjectsMessage}>NO PROJECTS FOR NOW</p>
        </div>
      </section>
  )
}

export default Projects