import React from 'react'

function ProjectCard({src}) {
  return (
    <a href="https://github.com/Vijayt2001/2D-Tank-War-Game" target='blank'>
    <img className='hover' src={src} alt='project logo'/>
    <h3>SFSU Social Media</h3>
    <p>Social Media Website</p>
    </a>
  )
}

export default ProjectCard
