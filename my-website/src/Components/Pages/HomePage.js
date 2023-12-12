import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import "../../index.css";
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';


function HomePage() {
  return (
  
        <div className='Homepage-container'>
            <div className='Homepage-header'>
                <div className='Homepage-header-section'>
                  <p className='Homepage-header-text1'> Hello, I'm <br></br> Edidiong Ephraim. </p>
                  <SouthOutlinedIcon className='icon'/>
                </div>
                <p className='Homepage-header-text2'> I'm a Full Stack and Web 3 Developer. </p>

            </div>
            <div className='Homepage-body'>
            </div>
        </div>
      
  )
}

export default HomePage