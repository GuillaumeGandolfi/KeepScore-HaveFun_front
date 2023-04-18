import { configureStore } from '@reduxjs/toolkit'
import reducer from '../reducer/appReducer'
import authMiddleware from '../middlewares/authenticationMiddleware'



export default configureStore({
  reducer,
  middleware: [authMiddleware],
})