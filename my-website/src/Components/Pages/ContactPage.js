import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import "../../index.css";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


function ContactPage() {
  return (
    <div className="contact-container">
       <div className='contact-text'>
        I will be thrilled to work on your next project <br></br>
        <ArrowForwardOutlinedIcon className='contact-arrow'/>
      </div>
      <div className="contact-form-container">
        <form
          action="https://getform.io/f/d04d86fd-8da9-4703-b5a2-32ead47f7d91"
          method="POST"
          className="contact-form"
        >
  
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact-name"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="contact-email"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="contact-message"
          />
          <button
            type="submit"
            className="contact-submit"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  
  
  )
}

export default ContactPage