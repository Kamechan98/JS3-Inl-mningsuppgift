import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useFetch from "../../../components/useFetch";
import productsService from "./productsService";

const initialState = {
  products: [],
  error: null,
  loading: false
}

export const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {

    return await productsService.getAllAsync()
    
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.loading = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = null
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
        state.error = action.payload
      })
  }
})

export default productsSlice.reducer