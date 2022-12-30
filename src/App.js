import './App.css'
import Header from './Components/Header'
import data from './data.json'
import Education from './Sections/Education'
import Skills from './Sections/Skills'
import Experience from './Components/Experience'
import Projects from './Sections/Projects'
import Page from './Sections/Page'
import MonthlyAchievements from './Sections/MonthlyAchievements'

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route,Routes, Switch,Link } from 'react-router-dom';
const App = () => {
    const Names = data.Names
    // var collegeName = data.Education[0].College
    // console.log('College Name: ', collegeName)
    return (
        <>
    <Router>
      <Routes>
        <Route path="/" element= {<Page/>}></Route>
        <Route path="/monthlyAchievements" element= {<MonthlyAchievements/>}></Route>
    </Routes>
    </Router>
        </>
    )
}

export default App
