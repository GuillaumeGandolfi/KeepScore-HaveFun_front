import {
  combineReducers
} from "@reduxjs/toolkit";

import loginReducer from '../reducer/loginReducer'
import signupReducer from '../reducer/signupReducer'
import userReducer from '../reducer/userReducer'
import utilsReducer from '../reducer/utilsReducer'
import transactionsReducer from './transactionsReducer'
import shopsReducer from "./shopsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  signup: signupReducer,
  utils: utilsReducer,
  transactions: transactionsReducer,
  shops: shopsReducer
})


export default rootReducer