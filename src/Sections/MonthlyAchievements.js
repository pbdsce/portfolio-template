import React from 'react';
import '../App.css';
import Students from '../monthlyAchievementsData';
import "../Sections/Skills/Skills.css"
import ellipse from '../assets/Ellipse.png'
 
function Info (props){
  return (
    
    <div className='skillcontainer' style={{border:"1.6px solid rgba(255, 255, 255, 0.22)",borderRadius:" 15px",
        backdropFilter:" blur(15px)",margin:"20px",width:"50%",  flexWrap:"wrap",marginLeft:"25vw",
       
        boxShadow:" 0 2px 10px rgb(0 0 0 / 10%), 0 10px 15px rgb(0 0 0 / 20%)",
        backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.07))"}} >
      
      
<h1 style={{fontStyle:"Arial",color:"white",marginBottom:"4px",fontSize:"22px",fontWeight:"20px"}}>Name: <span style={{fontWeight:500}}>{props.name}</span>   </h1>
<h1 style={{fontStyle:"Arial",color:"white",fontSize:"20px",marginBottom:"4px"}}> Achievement: <span style={{fontWeight:500}}>{props.Achievement}</span></h1>
<h1 style={{fontStyle:"Arial",color:"white",fontSize:"20px",marginBottom:"4px"}}> Description: <span style={{fontWeight:500}}>{props.Description}</span></h1>
 
     </div>
 
  )
}

function MonthlyAchievements() {
 
  return (
    <div style={{margin:'40px'}} >
     <h1 style={{color:'#00BA4D',textAlign:"center",fontSize:"40px"}}>Monthly Achievements </h1>
      <br/>
     {Students.map((e)=>{
       return (
        
       <Info name={e.name} Achievement={e.Achievement} Duration={e.Duration} Description={e.Description}/>
     );})}
    </div>
  );
}
export default MonthlyAchievements;
export {Info};