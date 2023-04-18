import testData from '../testData/testData.json'

import {
  CHANGE_EMAIL_FIELD,
  CHANGE_PASSWORD_FIELD,
} from "../store/actions/actions";
import { GET_INPUT_VALUE } from "../store/actions/signUpAction.js";
import { TOGGLE_HEADER } from '../store/actions/headerAction'



const initialState = {
  isLogged: false,
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  signUpEmailField: "",
  signUpPasswordField: "",
  isHidden : true,
  profil: testData[0]
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_HEADER:
            return {...state, isHidden:!state.isHidden}
    case GET_INPUT_VALUE:
      return { ...state, [action.name]: action.value };
    case CHANGE_EMAIL_FIELD:
      return { ...state, email: action.input };
    case CHANGE_PASSWORD_FIELD:
      return { ...state, password: action.input };
    default:
      return state;
  }
};

export default reducer;
