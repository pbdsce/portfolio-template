import React from 'react'
import './Header/header.css'
import data from '../data.json'
import ellipse from '../assets/Ellipse.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import discord from '../assets/discord.png'

const Header = () => {

    const { Introduction } = data;

    return (
        Introduction &&
        <div className='header-wrapper'>

            <section className='header-section'>

                <img src={ellipse} alt="" className="eclipse" />
                <img src={ellipse} alt="" className="eclipse" />

                <div className='header-container'>

                    <div className="header-intro">
                        <div className="header-intro-heading">
                            <h2 className='header-intro-heading-subtitle'>Heyy, I am</h2>
                            <h1 className='header-intro-heading-title'>{Introduction.Name}</h1>
                        </div>

                        {/* <p className="header-intro-role">
                                {Introduction.Role}
                        </p>                        */}

                        <a className='header-intro-role'>{Introduction.Role}</a>

                        <div className="header-intro-desc">
                            <p>{Introduction.Bio}</p>
                        </div>

                        <a target="_blank" href={Introduction.ResumeLink} download className='header-intro-resume'>Resume</a>

                    </div>

                    <div className='header-assets'>
                    <div className="header-image">
                        <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="profilepicture" className="header-image-img" />
                    </div>

                    <div className='header-socials'>
                        {Introduction.GitHubLink && <a href = {Introduction.GitHubLink} target = "_blank" rel = "noreferrer"><img src={github} alt="github" className='social-links'/></a>}
                        {Introduction.LinkedInLink && <a href = {Introduction.LinkedInLink} target = "_blank" rel = "noreferrer"><img src={linkedin} alt="linkedin" className='social-links'/></a>}
                        {Introduction.DiscordLink && <a href = {Introduction.DiscordLink} target = "_blank" rel = "noreferrer"><img src={discord} alt="linkedin" className='social-links'/></a>}
                    </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Header