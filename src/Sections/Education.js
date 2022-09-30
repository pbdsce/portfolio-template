import React from 'react'
import EducationComp from './Education/EducationComp';
import data from "../data.json"

const Education = () => {
  const {Education} = data;
  return (
    // Education&&
    <>
    <div className='Edtitle'>Education</div>
    {Education.map((data)=><EducationComp schlname={data.College} field = {data.Field} tenure={data.Duration}/>)}
    </>
  )
}

export default Education