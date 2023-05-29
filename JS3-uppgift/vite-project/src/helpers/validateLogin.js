export const validateLogin = ( formData, setErrors ) => {

    const err = {}


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
    // console.log(err)

  console.log(err)  
  setErrors(err)
  
  return Object.keys(err).length <= 0

  return Object.keys(err).length <= 0
}
