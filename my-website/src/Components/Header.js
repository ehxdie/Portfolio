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
            }}>
                Work
            </div>
            <div onClick={() => {
                navigate('/AboutPage')
            }}> 
                About
            </div>
            <div onClick={() => {
                  navigate('/ContactPage')
              }}>
                Contact
            </div>

        </div>
    </div>
  )
}

export default Header