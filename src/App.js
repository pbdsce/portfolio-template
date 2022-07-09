import './App.css'
import Header from './Sections/Header'
import data from './data.json'
import Education from './Sections/Education'
import Skills from './Sections/Skills'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'

const SampleComponent = () => {
    var Skills = data.Skills
    return (
      Skills.map((skill, index) => 
          <h1 key={index}>{skill}</h1>
      )
    )
}
const App = () => {
    var collegeName = data.Education[0].College
    console.log('College Name: ', collegeName)
    return (
        <>
            <SampleComponent />
            <Header />
            <Education />
            <Skills />
            <Experience />
            <Projects />
        </>
    )
}

export default App
