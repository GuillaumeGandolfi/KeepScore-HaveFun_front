import { SAVE_USER_INFO } from "../store/actions/userAction";
import { DELETE_USER_INFO } from "../store/actions/userAction";

// const expenses =
//   operations.reduce(
//     (accumulator, operations) => accumulator + operations.operation,
//     0
//   ) || 0;
// const labelList = operations.map((operation) => operation.label);

const initialState = {
  id: 0,
  family: {},
  email: "",
  firstname: "",
  lastname: "",
  level: 0,
  wallet: 0,
  operations: [],
  friends: [],
  quests: [],
  items: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        id: action.id,
        family: action.family,
        email: action.email,
        firstname: action.firstname,
        lastname: action.lastname,
        level: action.level,
        wallet: action.wallet,
        operations: action.operations,
        friends: action.friends,
        quests: action.quests,
        items: action.items,
      };
    case DELETE_USER_INFO:
      return { ...initialState };
    default:
      return state;
  }
};

export default userReducer;
