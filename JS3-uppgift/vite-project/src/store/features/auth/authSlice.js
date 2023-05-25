import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: null,
  loading: false,
  error: null
}


export const registerUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
  try {
    return await authService.register(formData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const loginUser = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  try {
    return await authService.login(formData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(loginUser.pending, state => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { logOut } = authSlice.actions

export default authSlice.reducer