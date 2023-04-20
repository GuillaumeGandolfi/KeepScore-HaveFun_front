import { axiosPrivate } from "../axios/axiosPrivate";
import { axiosPublic }  from "../axios/axiosPublic";
import { SUBMIT_LOGIN } from "../store/actions/authAction";
import { saveSuccessfulAuth } from "../store/actions/authAction";
import { CREATE_TRANSACTION } from "../store/actions/Transactions";

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState();
      axiosPublic
        .post('/login',{
          email,
          password,
        })
        .then((response) => {
          const { data } = response;
          const {token, refreshToken} = data;
          const user = JSON.stringify(data.responseWithoutPassword);
          const session = {token, refreshToken};
          localStorage.setItem("session", JSON.stringify(session));
          localStorage.setItem("user", user);
          console.log(localStorage.getItem("user"))
          store.dispatch(saveSuccessfulAuth(user));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case CREATE_TRANSACTION:
        const user = localStorage.getItem('user');
        const { id } = JSON.parse(user)
       
      axiosPrivate.post('/transaction', {
        label:action.label,
        operation:action.transaction,
        user_id: id
      })
      .then((response)=> {console.log(response)})
      .catch((error)=>{
        console.log(error)
      })
    default:
  }

  next(action);
};

export default authMiddleware;