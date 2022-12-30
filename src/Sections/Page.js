import Header from '../Components/Header'

import Education from './Education'
import Skills from './Skills'
import Experience from '../Components/Experience'
import Achievements from '../Components/Achievements'
import Projects from './Projects'
import Footer from './Footer'
const Page = () => {
    // var collegeName = data.Education[0].College
    // console.log('College Name: ', collegeName)
    return (
        <>       
            <Header />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievements/>
            <Footer />
        </>
    )
}

export default Page