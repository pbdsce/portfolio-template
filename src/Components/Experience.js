import React from 'react'
import triangle from '../assets/triangle.png';
import ExperienceBox from './Experience/ExperienceBox';
// import data from '../data.json';
import './Experience/experience.css';

const Experience = ({Experience}) => {
  return (
    Experience &&
    <div className='exp-section-wrapper'>
      <section className='exp-section' id ="experience">
        <img src={triangle} className = "triangle" alt="triangle" />
        <img src={triangle} className = {`triangle ${Experience.length===1?"adjust-triangle":""}`} alt="triangle" />
        <h1 className='exp-section-heading'>Experience</h1>
        <div className='exp-container'>
          {Experience.map((data)=><ExperienceBox designation={data.Role} company = {data.CompanyName} description = {data.Description} duration = {data.Duration} />)}
        </div>

      </section>
    </div>
  )
}

export default Experience