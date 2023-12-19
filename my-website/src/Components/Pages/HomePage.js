import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import "../../index.css";
import Projects from '../Projects';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import workoutimg from "../Images/workout.jpg";
import votingapplicationimg from "../Images/VotingApplication.jpg";
import chatappimg from "../Images/chatapp.jpg";
import gameimg from "../Images/Game.jpg";


function HomePage() {
  // Setting up dummy data for the projects data
  const [projects, setprojects] = useState([
  {
    name: "Mern Application 'workout buddy'",
    description: "This is a full stack application built on the MERN stack with some CRUD features",
    stack: "React, MongoDB, Express and Node",
    link: "http://stackoverflow.com",
    img: workoutimg,
  },
  {
    name: "Electronic Voting System",
    description: "An electronic voting system built using Solidity, Ethereum network (sempolia testnet) and Metamask, The Chai and Mocha library where used for testing the smart contract",
    stack: "React, Solidity, Sempolia testnet, and Chai and Mocha library",
    link: "http://stackoverflow.com",
    img: votingapplicationimg,
  
    }, {
      name: "Chat App",
      description: "Project description",
      stack: "Stack description",
      link: "http://stackoverflow.com",
      img: chatappimg,
    }, 
      {
      name: "OOP da game",
      description: "Project description",
      stack: "Stack description",
      link: "http://stackoverflow.com",
      img: gameimg,
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
                    <p className='icon-area-text'>Download my CV?</p>
                  </div>
                </div>
                <p className='Homepage-header-text2'>I'm a Full Stack and Web 3 Developer.</p>

            </div>
            <div className='Homepage-body'>
              <div className='projects-headline'>
                  Some of the things I've built...
                <SouthOutlinedIcon className='icon' />
              </div>

              {ProjectCard}
            </div>
        </div>
      
  )
}

export default HomePage