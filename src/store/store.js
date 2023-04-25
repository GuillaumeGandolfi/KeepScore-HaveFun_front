import { configureStore } from '@reduxjs/toolkit'
import authMiddleware from '../middlewares/authenticationMiddleware'
import rootReducer from '../reducer/rootReducer'






export default configureStore({
   reducer : rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})

