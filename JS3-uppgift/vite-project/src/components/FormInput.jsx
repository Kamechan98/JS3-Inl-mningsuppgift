import React from 'react'


const FormInput = ({ label, errorMsg, ...rest}) => {
  return (
    <div className="form-group">
    <label className='form-label reg-label' htmlFor={rest.id}>{ label }</label>
    <input className='form-control reg-control' {...rest}/>
    { errorMsg && <p className='error'>{ errorMsg }</p>}
    </div>
  )
}

export default FormInput