import { GET_INPUT_VALUE } from "../store/actions/signUpAction.js";


const initialState = {
  firstname: "",
  lastname: "",
  signUpEmailField: "",
  signUpPasswordField: "",
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
