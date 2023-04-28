import { axiosPrivate } from "../axios/axiosPrivate";
import { axiosPublic } from "../axios/axiosPublic";
import { SUBMIT_LOGIN } from "../actions/authAction";
import { saveSuccessfulAuth } from "../actions/authAction";
import { CREATE_TRANSACTION } from "../actions/Transactions";
import { saveUserInfo } from "../actions/userAction";
import { saveDaylyData } from "../actions/fetchDataActions";

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState().login;
      axiosPublic
        .post("/login", {
          email,
          password,
        })
        .then((response) => {
          const { data } = response;
          const { token, refreshToken } = data;
          const user = (data.responseWithoutPassword);
          console.log(user)
          
          const {
            budget,
            email,
            family,
            firstname,
            id,
            lastname,
            level,
            quests,
            wallet 
          } = user;
          const session = { token, refreshToken };
          localStorage.setItem("session", JSON.stringify(session));
          store.dispatch(saveSuccessfulAuth(user));
          store.dispatch(
            saveUserInfo(
              budget,
              email,
              family,
              firstname,
              id,
              lastname,
              level,
              quests,
              wallet 
            )
            
          );
          store.dispatch(saveDaylyData)
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case CREATE_TRANSACTION:

      const { id } = store.getState().user;

      axiosPrivate
        .post("/transaction", {
          label: action.label,
          operation: action.transaction,
          user_id: id,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    default:
  }

  next(action);
};

export default authMiddleware;
