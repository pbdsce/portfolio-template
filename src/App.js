
import './App.css'
import Header from './Sections/Header'
import data from './data.json'
import Education from './Sections/Education'
import {Skills, SkillsContainer,SkillsImage, Container, SkillsTitle,  TitleComponent, Unit} from './Sections/Skills'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import { Helmet } from "react-helmet"
import {Diamond} from 'react-awesome-shapes'
import styled from 'styled-components'
import pythonLogo from './assets/pythonLogo.jpg';

import javaLogo from './assets/javaLogo.jpg';
import cLogo from './assets/cLogo.jpg';
import cppLogo from './assets/cppLogo.png';
import jsLogo from './assets/jsLogo.png';

const App = () => {
   
    return (
        <>
         <div>
      <Helmet bodyAttributes={{ style: "background-color : #23272A" }} />
    
    <div className="shape1">
    <Diamond
    color="linear-gradient(135deg, #00BA4D, #00BA4D)"
    size="310px"
    zIndex={0}
/>
</div>
<div className="shape2">
<Diamond
    color="#23272A"
    size="290px"
    zIndex={0}
/>

</div>


<div className="shape3">
    <Diamond
    color="linear-gradient(135deg, #00BA4D, #00BA4D)"
    size="325px"
    zIndex={0}
/>
</div>
<div className="shape4">
<Diamond
    color="#23272A"
    size="300px"
    zIndex={0}
/>

</div>
    </div>
 
            
            <Header />
            <Education />
            <Skills />
            <Experience />
            <Projects />
        </>
    )
}

export default App
