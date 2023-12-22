import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import "../../index.css";
import img from "../Images/Screenshot 2023-05-10 204421.jpg"
import Repositories from '../Repositories';


function AboutPage() {
  return (
      <div className='Aboutpage-container'>
        <div className='Aboutpage-about'>
          <div className='Aboutpage-about-text'>
            <p className='Aboutpage-about-text1'>Hi, I'm Edidiong Udosen Ephraim</p>
            <p className='Aboutpage-about-text2'>I am a dedicated software engineer with a diverse academic and career background, as a tech enthusiast I am actively learning new technologies and developing new projects.</p>
            <div className='Aboutpage-techstack'>
            Core technologies:
            <ul className='list'>
              <li className='list1'> Javascript</li>
              <li className='list1'> Solidity</li>
              <li className='list1'> NodeJS</li>
              <li className='list1'> MongoDB</li>
              <li className='list1'> ReactJS</li>
              <li className='list1'> EtherJs</li>
              <li className='list1'> Express</li>
              <li className='list1'> Bootstrap</li>
              <li className='list1'> Bootstrap</li>
              <li className='list1'> Jquery</li>

            </ul>


            </div>
          </div>
           {/* <div className='Aboutpage-about-image'>
            <img src={img} className='img'/>
          </div>  */}
   

        </div>
 
        <div className='Aboutpage-info'>
          <Repositories/>
        </div>
       
      </div>
    
  )
}

export default AboutPage