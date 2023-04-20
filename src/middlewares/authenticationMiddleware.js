import axios from "axios";
import { SUBMIT_LOGIN } from "../store/actions/authAction";
import { saveSuccessfulAuth } from "../store/actions/authAction";

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState();
      axios
        .post("http://localhost:3000/login", {
          email,
          password,
        })
        .then((response) => {
          const { data } = response;
          console.log(data)
          store.dispatch(saveSuccessfulAuth(data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    default:
  }

  next(action);
};

export default authMiddleware;