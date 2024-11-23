import React from 'react'
import styles from './ProjectsStyles.module.css';
import orthographic from '../../assets/orthographic.svg';
import DeVera from '../../assets/De Vera.svg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <p className={styles.noProjectsMessage}>Take a look at my portfolio to explore my latest works, 
        or reach out for commissions and collaborations. Let’s create something beautiful together!</p>
      <img src={orthographic} alt="Github icon" />
      <div className={styles.projectsContainer}>   
      <img src={DeVera} alt="Github icon" />
        </div>
      </section>
  )
}

export default Projects