import React from 'react'
import data from '../data.json'
import './Skills/Skills.css'

const Skills = () => {
    return (
        <div className='skill-container'>
            <div className='heading'>Skills</div>
            <br />
            <div className='box2' />
            <div className='box1' />
            <div className='total'>
                <div className='unit'>
                    <TitleComponent>{Skills}</TitleComponent>
                </div>
            </div>
        </div>
    )
}

const TitleComponent = () => {
    const Skills = data.Skills

    return Skills.map((record, i) => (
        <div className='skillcontainer'>
            <div className='imagecontainer'>
                <div className='image' key={i}>
                    <img
                        src={record.icon}
                        style={{ width: '100%' }}
                        alt={record.skill}
                    />
                </div>
            </div>

            <div className='skill-title' key={i}>
                {record.skill}
            </div>
        </div>
    ))
}

export default Skills
export { TitleComponent }
