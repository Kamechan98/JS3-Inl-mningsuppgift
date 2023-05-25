

const register = async (formData) => {
  const user = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    street: formData.street,
    postalCode: formData.postalcode,
    city: formData.city,
    mobile: formData.mobile,
    company: formData.company,
    email: formData.email,
    password: formData.password,
    confirmPswrd: formData.confirmPswrd,
    profileImg: formData.profileImg,
  }

  const res = await fetch('http://localhost:9999/api/users/add', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    }
  })

  if(!res.ok) throw new Error('something went wrong when creating user')

  return res.json()
}


const login = async (formData) => {
  const user = {
    email: formData.email,
    password: formData.password
  }

  const res = await fetch('http://localhost:9999/api/users/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    }
  })

  if (!res.ok) throw new Error('Something went wrong when logging you in')

  return res.json()

}


const authService = {
  register,
  login
}

export default authService