import React from 'react'
import "../index.css"
import { useNavigate } from 'react-router-dom';


function Header() {
const navigate = useNavigate();
  return (
    <div className='Header-container'>
        <div className='Header-container-1'>
            DN.
        </div>
        <div className='Header-container-2'>
            <div onClick={() => {
                navigate('/')
            }} className='links-style'>
                Work
            </div>
            <div onClick={() => {
                navigate('/AboutPage')
            }} className='links-style'> 
                About
            </div>
            <div onClick={() => {
                  navigate('/ContactPage')
              }} className='links-style'>
                Contact
            </div>

        </div>
    </div>
  )
}

export default Header