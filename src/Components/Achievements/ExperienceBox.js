import React from 'react';

const ExperienceBox = ({designation,company,description,duration}) => {
    return (
        <div className='exp-box'>

            <div className='flex exp-head'>

                <div className='exp-box-heading'><span className='heading'><i>{designation}&nbsp;</i></span></div>
                <p className='exp-heading-date'>{duration}</p>
            </div>

            <p className='exp-box-desc'>{description}</p>
        </div>
    )
}

export default ExperienceBox