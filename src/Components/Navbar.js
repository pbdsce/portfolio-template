import React, {useState,useEffect} from 'react';
import './Navbar/navbar.css';
import menu from '../assets/menu.png'

const Navbar = ({name}) => {
    const [showMenu, setShowMenu] = useState("");
    const handleMenu = () => {
        if(showMenu===""){
            setShowMenu("showmenu")
        }
        else{
            setShowMenu("")
        }
    }

    return (
    
    <nav className={`nav`}>
        <div className="nav-container">
            <a href="#"><h1 className='nav-brand'>{name}</h1></a>
            <div className={`nav-items ${showMenu}`}>
                <a href="#projects" onClick = {handleMenu} className='nav-link'>Projects</a>
                <a href="#experience" onClick = {handleMenu} className='nav-link'>Experience</a>
                <a href="#achievements" onClick = {handleMenu} className='nav-link'>Achievements</a>
            </div>
            <div className={`menu-container`}>
                <img src={menu} alt="menu" onClick = {handleMenu} className='menu'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar