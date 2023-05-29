import { configureStore } from '@reduxjs/toolkit'
import shoppingCartSlice from './features/shoppingCart/shoppingCartSlice'
import productsSlice from './features/products/productsSlice'
import authSlice from './features/auth/authSlice'
import orderSlice from './features/orders/orderSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    shoppingCart: shoppingCartSlice,
    auth: authSlice,
    orders: orderSlice
  }
})