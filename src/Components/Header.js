import React from 'react'
import './Header/header.css'
import ellipse from '../assets/Ellipse.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import discord from '../assets/discord.png'
import Navbar from './Navbar'

const Header = ({ Introduction }) => {

    return (
        Introduction &&
        <>
        <Navbar name ={Introduction.Name} />
        <div className='header-wrapper'>

            <section id = "main" className='header-section'>

                <img src={ellipse} alt="" className="eclipse" />
                <img src={ellipse} alt="" className="eclipse" />

                <div className='header-container'>

                    <div className="header-intro">
                        <div className="header-intro-heading">
                            <h2 className='header-intro-heading-subtitle'>Hey, I am</h2>
                            <h1 className='header-intro-heading-title'>{Introduction.Name}</h1>
                        </div>

                        <a href ='#' className='header-intro-role'>{Introduction.Role}</a>

                        <div className="header-intro-desc">
                            <p>{Introduction.Bio}</p>
                        </div>

                        
                    </div>

                    <div className='header-assets'>
                        <div className="header-image">
                            <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="profilepicture" className="header-image-img" />
                        </div>

                        <div className='header-socials'>
                            {Introduction.GitHubLink && <a href={Introduction.GitHubLink} target="_blank" rel="noreferrer"><img src={github} alt="github" className='social-links' /></a>}
                            {Introduction.LinkedInLink && <a href={Introduction.LinkedInLink} target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" className='social-links' /></a>}
                            {Introduction.DiscordLink && <a href={Introduction.DiscordLink} target="_blank" rel="noreferrer"><img src={discord} alt="linkedin" className='social-links' /></a>}
                        </div>
                    </div>

                </div>
            </section>
        </div>
        </>
    )
}

export default Header