
const getAllAsync = async () => {
  const res = await fetch('http://localhost:9999/api/products/')

  if(!res.ok) throw new Error('something went wrong when getting data')

  return res.json()
}

const productsService = {
  getAllAsync
}

export default productsService