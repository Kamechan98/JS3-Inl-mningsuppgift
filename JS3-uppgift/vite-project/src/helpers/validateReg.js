export const validateReg = ( formData, setErrors ) => {

    const err = {}

    // first name
  if(formData.firstName.trim() === '') {
    err.firstName = 'You need to enter a first name'
  } else if(formData.firstName.length < 3) {
    err.firstName = 'Your name must be atleast 3 chars long'
  }

    // last name
  if(formData.lastName.trim() === '') {
    err.lastName = 'You need to enter a last name'
  } else if(formData.lastName.length < 3) {
    err.lastName = 'Your name must be atleast 3 chars long'
  }

   // street
   if(formData.street.trim() === '') {
    err.street = 'You need to enter a street'
  } else if(formData.street.length < 3) {
    err.street = 'Your street is invalid'
  }

  // postal code
  if(formData.postalCode.trim() === '') {
    err.postalCode = 'You need to enter a postal code'
  } else if(formData.postalCode.length < 3) {
    err.postalCode = 'Your postal code is invalid'
  }

  // city
  if(formData.city.trim() === '') {
    err.city = 'You need to enter a city'
  } else if(formData.city.length < 3) {
    err.city = 'Your city must be atleast 3 chars long'
  }


  //email
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(formData.email.trim() === '') {
      err.email = 'You need to enter an email adress'
    }
    else if(!emailRegex.test(formData.email)) {
        err.email = 'You need to enter a valid email address'
      }


    // password & confirm password 
    // const passwordRegex = /^(?=.*[a-ö])(?=.*[A-Ö])(?=.*\d)(?=.*[!])[a-öA-Ö\d!]{8,}$/

    if(formData.password.trim() === '') {
    err.password = 'You need to enter a password'
    }
    else if (formData.password.length < 8) {
    err.password = ' Your password needs to be atleast 8 characters long'
    } 
//     else if(!passwordRegex.test(formData.password)) {
//     err.password = 'Your password needs to have one uppercase, one lowercase, one number and a special character'
//   }

  if(formData.confirmPswrd !== formData.password) {
    err.confirmPswrd = 'The passwords do not match!'
  }


    console.log(err)
    setErrors(err)
    return Object.keys(err).length <= 0

  return Object.keys(err).length <= 0

}

