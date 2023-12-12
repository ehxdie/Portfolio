import React from 'react'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage'
import "../index.css"
import { Routes, Route } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'



function MainContainer() {
  return (

      <div className='Maincontainer'>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
      <Footer/>
      </div>

  )
}

export default MainContainer