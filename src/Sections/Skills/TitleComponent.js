import data from '../data.json'

const TitleComponent = () => {
    const Skills = data.Skills
    
      return (
        Skills.map((record,i)=> 
        <div className="skillcontainer">
    <div className="imagecontainer">
    <div className="image" key={i} >
      
      <img src={record.icon} style={{width:"80px"}} alt={record.skill} />
      
  
      </div>
    </div>     
   
      <div className="title" style={{textAlign:"center", paddingTop:"8%"}} key={i}>{record.skill}</div>
     </div>
      )
      )
  
    }

    export  default TitleComponent