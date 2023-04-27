import { axiosPublic } from "../axios/axiosPublic";
import {
  SEND_SIGNUP,
} from "../store/actions/signUpAction";

const signupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_SIGNUP:
      const {
        firstname,
        lastname,
        signUpEmailField,
        signUpPasswordField,
        confirmPassword,
      } = store.getState().signup;
      axiosPublic
        .post("/user", {
          email : signUpEmailField,
          firstname,
          lastname,
          password : signUpPasswordField,
          confirmation : confirmPassword,
        })
        .then((response) => {
          
          console.log(response);

         
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
  }

  next(action);
};

export default signupMiddleware;
