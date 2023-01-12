import './Project.css'
const Project = ({ data }) => {
    return (
        <>
            <div className='card'>
                <div className='image-icon'>
                    <img src={data.ImageLink} alt={data.Title} />
                </div>
                <label className='title'>{data.Title}</label>
                <p className='desc'>{data.Description}</p>
                <a href={data.ProjectLink} className='desc' style={{textAlign:"center",marginTop:"1vw" ,textDecorationLine:" underline"}}>Project Link</a>
            </div>
        </>
    )
}

export default Project
