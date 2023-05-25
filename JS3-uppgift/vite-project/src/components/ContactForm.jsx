import React from 'react'
import FormInput from './FormInput'

const ContactForm = () => {
  return (
    <form noValidate>
    <FormInput
    id="name"
    type="text"
    label="Your Name*"/>
    <FormInput
    id="Email"
    type="email"
    label="Email*"/>
    <FormInput
    id="mobile"
    type="number"
    label="Phone Number"/>
    <FormInput
    id="company"
    type="text"
    label="Company (optional)"/>
    <FormInput
    id="message"
    type="text"
    label="Write something"/>
    <input type="checkbox" id='reg-checkbox'/> 
    <label className='checkbox-label' htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment.
    </label>
    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default ContactForm