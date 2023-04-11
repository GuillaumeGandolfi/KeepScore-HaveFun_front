import { configureStore } from '@reduxjs/toolkit'
import reducer from '../reducer/appReducer'

export default configureStore({
  reducer: reducer,
})