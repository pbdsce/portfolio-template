import React from 'react'
import triangle from '../assets/triangle.png';
import ExperienceBox from './Achievements/ExperienceBox';
import data from '../data.json';
import './Achievements/achievement.css';

const Achievements = ({Achievements}) => {

  return ( 
    Achievements &&
    <div id = "achievements" className='exp-section-wrapper'>
      <section className='exp-section' id ="experience">
        <img src={triangle} className = "triangle" alt="triangle" />
        <img src={triangle} className = {`triangle ${Achievements.length===1?"adjust-triangle":""}`} alt="triangle" />
        <h1 className='exp-section-heading'>Achievements</h1>
        <div className='exp-container'>
          {Achievements.map((data)=><ExperienceBox designation={data.Achievement} description = {data.Description} duration = {data.Duration} />)}
        </div>

      </section>
    </div>
  )
}

export default Achievements