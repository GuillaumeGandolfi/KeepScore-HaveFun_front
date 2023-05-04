import { GET_INPUT_VALUE } from "../actions/signUpAction.js";


const initialState = {
  firstname: "",
  lastname: "",
  signUpEmailField: "",
  signUpPasswordField: "",
  confirmPassword:"",
};

const signupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_INPUT_VALUE:
      return { ...state, [action.name]: action.value };
      
    default:
      return state;
  }
};

export default signupReducer;
