import {Middleware, StoreEnhancer, configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import reactotron from './../../ReactotronConfig';
import Logger from "redux-logger"

const loggerMiddleware: Middleware = Logger

const middlewares = [
  /* other middlewares */
];


  const createDebugger = require('redux-flipper').default;

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createDebugger() ),
  devTools: false,
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(reactotron.createEnhancer!()),
  reducer: {
    auth: authSlice.reducer,
  },
});