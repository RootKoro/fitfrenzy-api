import { createSlice } from '@reduxjs/toolkit'
import api from '../api'

/* export const setToken = (token: any) => {
  if (!token) {
    delete api.defaults.headers.common.Authorization;
  }
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}; */

const initialState = {
  userInfo: { 
    _id: null,
    email: null,
    birthday: null,
    created: null,
    firstname: null,
    lastname: null,
    illness: null,
    preferences: null,
    surveyAnswered: null
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
    logout: () => initialState,
    userProfileFetched: (user) => {

    }
  },
  /* extraReducers: {
    [me.fulfilled.type]: (state, action) => {
        if (action.payload === 400) {
          state.principal = undefined;
        } else {
          state.principal = action.payload;
        }
    },
  }, */
})

export const authActions = authSlice.actions;

export default authSlice