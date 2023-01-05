import Header from '../Components/Header'
import Education from './Education'
import Skills from './Skills'
import Experience from '../Components/Experience'
import Achievements from '../Components/Achievements'
import Projects from './Projects'
import Footer from './Footer'
import data from '../data.json'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
const Page = () => {
    const { name } = useParams()
    const [profile,setProfile] = useState(null)
    useEffect(() => {
        const info = data.find(getName)
        setProfile(info)
    }, [])

    const getName = (d) => {
        const email = d["Introduction"]["EmailLink"].split("@")[0]
        if(email===name)
        return d
    }

    return (
        profile&&
        <>
            <Header Introduction = {profile.Introduction} />
            <Education Education = {profile.Education} />
            <Skills Skills={profile.Skills} />
            <Experience Experience = {profile.Experience} />
            <Projects projects={profile.Projects} />
            <Achievements Achievements={profile.Achievements} />
            <Footer />
        </>
    )
}

export default Page