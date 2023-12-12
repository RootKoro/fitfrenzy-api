import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: { 
    email: null,
    id: null
  }, 
  userToken: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setToken: (state, action) => {
      state.userToken = action.payload;
    },
    logout: () => initialState
  },
})

export const authActions = authSlice.actions;

export default authSlice