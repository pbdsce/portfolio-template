import React from 'react'
import styled from "styled-components";
import data from '../data.json'
import pythonLogo from '../assets/pythonLogo.jpg';
import javaLogo from '../assets/javaLogo.jpg';
import cLogo from '../assets/cLogo.jpg';
import cppLogo from '../assets/cppLogo.png';
import jsLogo from '../assets/jsLogo.png';
import '../App.css'


const Skills = () => {
  return (
    <>
    <div className="heading">Skills</div>
    <div className="unit">
      <Unit/>
    </div>
   </>

  );
}

const logosObject = {
  'Javascript': "../assets/jsLogo.png",
  'Python':"../assets/pythonLogo.jpg",
 'Java':"../assests/javaLogo.jpg",
  'C':"../assets/cLogo.jpg"
  }

  

const TitleComponent = () => {
  const Skills = data.Skills
  /*for(var i=0;i<logosObject.length; )
  for(var j=0;i<logosObject.length; )
  if(Skills[i]===logosObject[j])
  {*/
    return (
      Skills.map(({skill,image} ,index)=> 
        <Container>
     <SkillsContainer>
      <div img src="logosObject.image">

      </div>
      
      </SkillsContainer>   
     
      <div className="title" key={index}>{skill}</div>
     </Container>
      
    )
    )

  }

 


const Unit=()=>
{
  styled.div`
  height=8rem;
width=100vw;
position:absolute;
padding:3%;
margin-left:12%;
float:center;
justify-content:space-around;
align-items:center;
display:flex;

  `;

  return(       
     <TitleComponent >{Skills}</TitleComponent>

     )
}


const SkillsContainer=styled.div`


display: flex;
flex-direction=column;

justify-content:space-around;
align-items:center;
width:7.5rem;;
height:7.5rem;

border-radius: 18px;

backdrop-filter: blur(8px);
-webkit-backdrop-filter: blur(9px);
border: 1.6px solid rgba(255, 255, 255, 0.3);border-radius: 25px;
backdrop-filter: blur(40px);

box-shadow: 0 2px 10px rgb(0 0 0 / 10%), 0 10px 15px rgb(0 0 0 / 20%);

background-image: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15));

mix-blend-mode: hard-light;


`;

const SkillsImage=styled.img`
height:6rem;
width:6rem;

`;

const Container=styled.div`

margin-top:5%;
margin-left:4%;

float:center;
`;


const SkillsTitle=styled.h3`
  color: white;
  font-size:1.2 rem;
  text-align:match-parent;
  font-style: italic;
  font-family: Nunito;
  
`;

export  {Skills}
export  {SkillsContainer}
export  {SkillsImage}
export  {SkillsTitle}
export  {Container}
export  {TitleComponent}
export  {Unit}