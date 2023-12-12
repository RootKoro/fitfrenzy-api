import {Middleware, StoreEnhancer, configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import reactotron from './../../ReactotronConfig';
import Logger from "redux-logger"

const loggerMiddleware: Middleware = Logger

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware),
  devTools: false,
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(reactotron.createEnhancer!()),
  reducer: {
    auth: authSlice.reducer,
  },
});