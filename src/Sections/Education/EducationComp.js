import React from 'react'
import "./Education.css"
import icon1 from "./icon1.svg"


export default function EducationComp({schlname,field,tenure}) {
  return (
    <div>
      <div className="educationcontainer">
        <div className="logoanddet">
        <div className="logoobj">
          <img src={icon1} alt="logo" />
        </div>
        <div className="instdet">
          <span className="instname">
            {schlname}
          </span>
          <span className='instcourse'>
            {field}
          </span>
        </div>
        </div>
        <div className="insttenure">
          <p>{tenure}</p>
        </div>
      </div>
    </div>
  )
}
