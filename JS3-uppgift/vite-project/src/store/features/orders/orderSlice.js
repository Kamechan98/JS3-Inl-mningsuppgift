import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from './orderService'

const initialState = {
    orders: [],
    error: null,
    loading: false
  }

  export const getAllOrders = createAsyncThunk('orders/getAll', async (userId, thunkAPI) => {
    try {
      return await orderService.getOrderAsync(userId)
      
      } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  })


  export const addOrder = createAsyncThunk('orders/add', async (orderData, thunkAPI) => {
    try {
        return await orderService.createOrderAsync(orderData)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

  
export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllOrders.pending, state => {
          state.loading = true
        })
        .addCase(getAllOrders.fulfilled, (state, action) => {
          state.loading = false
          state.orders = action.payload
          state.error = null
        })
        .addCase(getAllOrders.rejected, (state, action) => {
          state.loading = false
          state.orders = []
          state.error = action.payload
        })


        .addCase(addOrder.pending, (state) => {
            state.loading = true
        })
        .addCase(addOrder.fulfilled, (state, action) => {
            state.loading = false
            state.orders = [...state.orders, action.payload]
            state.error = null
        })
        .addCase(addOrder.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
  })

  export default orderSlice.reducer