import { axiosPrivate } from "../axios/axiosPrivate";
import { axiosPublic } from "../axios/axiosPublic";
import { SUBMIT_LOGIN } from "../store/actions/authAction";
import { saveSuccessfulAuth } from "../store/actions/authAction";
import { CREATE_TRANSACTION } from "../store/actions/Transactions";
import { saveUserInfo } from "../store/actions/userAction";

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState().login;
      console.log(store.getState().login);
      axiosPublic
        .post("/login", {
          email,
          password,
        })
        .then((response) => {
          const { data } = response;
          const { token, refreshToken } = data;
          const user = JSON.stringify(data.responseWithoutPassword);
          const {
            id,
            family,
            email,
            firstname,
            lastname,
            level,
            wallet,
            operations,
            friends,
            quests,
          } = JSON.parse(user);
          const items = user.items_collection;
          const session = { token, refreshToken };
          localStorage.setItem("session", JSON.stringify(session));
          store.dispatch(saveSuccessfulAuth(user));
          store.dispatch(
            saveUserInfo(
              id,
              family,
              email,
              firstname,
              lastname,
              level,
              wallet,
              operations,
              friends,
              quests,
              items
            )
          );
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
