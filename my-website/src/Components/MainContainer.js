import React from 'react'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage'


function MainContainer() {
  return (
    <div>
        <HomePage/>
        <ContactPage/>
        <AboutPage/>
        
    </div>
  )
}

export default MainContainer