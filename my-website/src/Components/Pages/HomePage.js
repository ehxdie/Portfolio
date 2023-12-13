import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import "../../index.css";
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import Projects from '../Projects';



function HomePage() {
  // Setting up dummy data for the projects data
  const [projects, setprojects] = useState([
  {
    number: 1,
    name: "Project name",
    description: "Project description",
    stack: "stack description",
    link: "http://stackoverflow.com",
    img: "img",
  },
  {
    number: 2,
    name: "Project name",
    description: "Project description",
    stack: "stack description",
    link: "http://stackoverflow.com",
    img: "img",
  
  }])

  const ProjectCard = projects.map(project => {
    return (
      <Projects 
      key={project.number} 
      number={project.number} 
      name={project.name} 
      description={project.description} 
      stack={project.stack} 
      link={project.link} 
      img={project.img}/>
    )
  }
    

  );

  return (
  
        <div className='Homepage-container'>
            <div className='Homepage-header'>
                <div className='Homepage-header-section'>
                  <p className='Homepage-header-text1'>Hello, I'm <br></br> Edidiong Ephraim.</p>
                  <div className='icon-area'>
                    <SouthOutlinedIcon className='icon'/>
                    <p className='icon-area-text'>Download my cv?</p>
                  </div>
                </div>
                <p className='Homepage-header-text2'>I'm a Full Stack and Web 3 Developer.</p>

            </div>
            <div className='Homepage-body'>
              {ProjectCard}
            </div>
        </div>
      
  )
}

export default HomePage