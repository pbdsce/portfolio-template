import React from 'react'
import Project from './Project/Project'
import data from '../data.json'
import './Project/Project.css'
const Projects = () => {
  const projects = data.Projects;
  return (
    <>
    { projects &&  
    
    <>
          <div className='Project-Title'>
          <h2>Projects</h2>
          </div>
          <div className='flex-row'>
              {projects.map((data) => <Project data = {data} />)}
          </div>
    </>
    }
    
    </>
  )
}

export default Projects