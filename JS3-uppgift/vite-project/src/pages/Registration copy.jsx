import React from 'react'
import RegForm from '../components/RegForm'

const Registration = () => {
  return (
    <div className='reg-wrapper'>
    <div className='reg-card'>
    <p className='reg-headline'>Register an account</p>
      <RegForm />
    </div>
    </div>
  )
}

export default Registration