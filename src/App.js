import './App.css'
import Header from './Components/Header'
import data from './data.json'
import Education from './Sections/Education'
import Skills from './Sections/Skills'
import Experience from './Components/Experience'
import Projects from './Sections/Projects'


const App = () => {
    // var collegeName = data.Education[0].College
    // console.log('College Name: ', collegeName)
    return (
        <>
            <Header />
            <Education />
            <Skills />
            <Experience />
            <Projects />
        </>
    )
}

export default App
