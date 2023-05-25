import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0
}

const getTotalQuantity = (cart) => {
  let total = 0
  cart.forEach(item => total += item.quantity)
  return total
}

const getTotalAmount = (cart) => {
  let amount = 0
  cart.forEach(item => amount += item.product.price * item.quantity)
  return amount
}


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Checking if product is already in cart, returns item or null
      const itemRef = state.cart.find(item => item.product._id === action.payload._id)

      itemRef
      ? itemRef.quantity += 1
      : state.cart = [...state.cart, { product: action.payload, quantity: 1 }]

      state.totalQuantity = getTotalQuantity(state.cart)
      state.totalAmount = getTotalAmount(state.cart)
    },
    removeOne: (state, action) => {
      const itemRef = state.cart.find(item => item.product._id === action.payload)

      itemRef.quantity <= 1
      ? state.cart = state.cart.filter(item => item.product._id !== action.payload)
      : itemRef.quantity -= 1

      state.totalQuantity = getTotalQuantity(state.cart)
      state.totalAmount = getTotalAmount(state.cart)
    },
    removeAll: (state, action) => {
      const itemRef = state.cart.find(item => item.product._id === action.payload)

      state.cart = state.cart.filter(item => item.product._id !== action.payload)

      state.totalQuantity = getTotalQuantity(state.cart)
      state.totalAmount = getTotalAmount(state.cart)
    },
    clearCart: (state, action) => {
      state.cart = []

      state.totalQuantity = getTotalQuantity(state.cart)
      state.totalAmount = getTotalAmount(state.cart)
    }
  }
})

export const { addToCart, removeOne, removeAll, clearCart } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer