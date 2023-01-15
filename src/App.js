import './App.css'

import Page from './Sections/Page'
import Redirect from './Sections/Redirect'

import MonthlyAchievements from './Sections/MonthlyAchievements'
import { BrowserRouter as Router, Route,Routes, Switch,Link } from 'react-router-dom';

const App = () => {
    // const Names = data.Names
    // var collegeName = data.Education[0].College
    // console.log('College Name: ', collegeName)
    return (
        <>
      <Routes>
        <Route path="/" ></Route>
        <Route path="/:name" element= {<Page/>}></Route>
        <Route path="/monthlyAchievements" element= {<MonthlyAchievements/>}></Route>
    </Routes>

        </>
    )
}

export default App
