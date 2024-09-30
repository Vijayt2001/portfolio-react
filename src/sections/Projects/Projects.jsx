import React from 'react'
import styles from './ProjectStyles.module.css'
import viberr from '../../assets/viberr.png'

function Projects() {
  return (
    <section id='projects' className={StyleSheet.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className= {styles.projectsContainer}>
            <a href="https://github.com/Vijayt2001/2D-Tank-War-Game">
            <img className='hover' src={viberr} alt='project logo'/>
            <h3>SFSU Social Media</h3>
            <p>Social Media Website</p>
            </a>
        </div>
    </section>

  )
}

export default Projects
