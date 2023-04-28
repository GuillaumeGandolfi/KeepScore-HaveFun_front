import {
  combineReducers
} from "@reduxjs/toolkit";

import loginReducer from '../reducer/loginReducer'
import signupReducer from '../reducer/signupReducer'
import userReducer from '../reducer/userReducer'
import utilsReducer from '../reducer/utilsReducer'
import transactionsReducer from './transactionsReducer'
import {
  shopReducer
} from "./shopReducer.js";

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  signup: signupReducer,
  utils: utilsReducer,
  transactions: transactionsReducer,
  shops: shopReducer
})


export default rootReducer