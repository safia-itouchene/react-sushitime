import React from 'react'
import contactPic from "../assets/8.jpg"
import "../styles/contact.css";
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'style={{backgroundImage :`url(${contactPic})`}}></div>
        <div className='rightSide' >
          <h1>Contact Us </h1>
          <form id="contact-form" method='POST'>
              <label htmlFor="name">Full NAME</label>
              <input name="name" placeholder='Enter full name ...' type ="text"/>

              <label htmlFor="name">Eamil</label>
              <input name="email" placeholder='Email' type ="Eamil"/>

              <label htmlFor="message"> Message </label>
              <textarea rows="6" name="message" placeholder='Enter message ..' type ="text" required> </textarea>
              <button type="submit">Sand Message</button>
              
          </form>
        </div>
    </div>
  )
}

export default Contact
