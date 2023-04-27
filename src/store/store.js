import { configureStore } from '@reduxjs/toolkit'
import authMiddleware from '../middlewares/authenticationMiddleware'
import fetchDataMiddleware from '../middlewares/fetchDataMiddleware'
import { applyMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../reducer/rootReducer'







export default configureStore({
   reducer : rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware, fetchDataMiddleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})

