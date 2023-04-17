import axios from "axios";
import { SUBMIT_LOGIN } from "../store/actions/authAction";
import { saveSuccessfulAuth } from "../store/actions/authAction";

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState();
      axios
        .post("http://localhost:3001/login", {
          email,
          password,
        })
        .then((response) => {
          const { pseudo } = response.data;
          store.dispatch(saveSuccessfulAuth(pseudo));
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