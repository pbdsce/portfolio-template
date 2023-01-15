import React from 'react'
import EducationComp from './Education/EducationComp';
// import data from "../data.json"

const Education = ({Education}) => {
  return (
    // Education&&
    <section id ="education">
    <div className='Edtitle'>Education</div>
    {Education.map((data)=><EducationComp schlname={data.College} field = {data.Field} tenure={data.Duration}/>)}
    </section>
  )
}

export default Education