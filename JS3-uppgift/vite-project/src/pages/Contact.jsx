import React from 'react'
import heroBanner from '../assets/Placeholders/1920x300.svg'
import FormInput from '../components/FormInput'
import Map from '../components/Map'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const Contact = () => {
  const {user} = useSelector(state => state.auth)
  if(!user) return <Navigate to='/login'/>
  return (
    <div className='ContactContainer'>
    <img src={heroBanner} />
    <div className='login-wrapper'>
    <div className='login-card'>
     
      <form noValidate>
        <FormInput
          id="firstName"
          type="text"
          label="Your Name*" />
        <FormInput
          id="contact-email"
          type="text"
          label="Your Email*" />
        <FormInput
          id="mobile"
          type="number"
          label="Phone Number" />
        <FormInput
          id="contact-company"
          type="text"
          label="Company (optional)" />

        <div className='contact-textarea'>
          <label>Write Something*</label>
          <textarea name="" id="textarea" cols="30" rows="10"></textarea>
        </div>

        <div>
        <input type="checkbox" id='contact-checkbox' />
        <label className='checkbox-label' htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment</label>
        </div>

        <button className='login-btn'>Submit</button>
      </form>

    
    </div>
    </div>
    <Map/>
    </div>
  )
}

export default Contact