import React from 'react'
import Project from './Project/Project'
// import data from '../data.json'
import rectangle from '../assets/rectangle.png'
import './Project/Project.css'
const Projects = ({projects}) => {
    return (
        <section id = "projects">
            {projects && (
                <div className='project-wrapper'>
                    <div className='Project-Title'>
                        <h2>Projects</h2>
                        <div className='projects'>
                            <img
                                src={rectangle}
                                alt='rectangle'
                                className='rectangle'
                            />
                            <img
                                src={rectangle}
                                className={`rectangle ${
                                    projects.length === 1
                                        ? 'adjust-rectangle'
                                        : ''
                                }`}
                                alt='rectangle'
                            />
                        </div>
                        <div className='flex-row'>
                            {projects.map((data) => (
                                <Project data={data} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects
