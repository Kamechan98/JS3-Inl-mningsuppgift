export const validateProduct = ( formData, setErrors ) => {
    const err = {}

    // product name
  if(formData.name.trim() === '') {
    err.name = 'You need to enter a name'
  } else if(formData.name.length < 3) {
    err.name = 'Your name must be atleast 3 chars long'
  }

    // description
  if(formData.description.trim() === '') {
    err.description = 'You need to enter a description'
  } else if(formData.description.length < 3) {
    err.description = 'Your description must be atleast 3 chars long'
  }

   // price
   if(formData.price === '') {
    err.price = 'You need to enter a price'
  } else if(formData.price.length < 1) {
    err.price = 'Your price is invalid'
  }

  // ImageURL
  if(formData.imageURL.trim() === '') {
    err.imageURL = 'You need to enter an image URL'
  } else if(formData.imageURL.length < 1) {
    err.imageURL = 'Your image URL is invalid'
  }

  // // tags
  // if(formData.tags.trim() === '') {
  //   err.tags = 'You need to enter a city'
  // } else if(formData.tags.length < 3) {
  //   err.tags = 'Your city must be atleast 3 chars long'
  // }

    console.log(err)
    setErrors(err)
    return Object.keys(err).length <= 0

}

