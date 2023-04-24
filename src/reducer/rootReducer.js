import { combineReducers } from '@reduxjs/toolkit'

import loginReducer from '../reducer/loginReducer'
import signupReducer from '../reducer/signupReducer'
import userReducer from '../reducer/userReducer'
import utilsReducer from '../reducer/utilsReducer'


const rootReducer = combineReducers({user: userReducer, login: loginReducer, signup : signupReducer,utils : utilsReducer })


export default rootReducer
