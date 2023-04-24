const user = localStorage.getItem("user");
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
const expenses =
  operations.reduce(
    (accumulator, operations) => accumulator + operations.operation,
    0
  ) || 0;
const labelList = operations.map((operation) => operation.label);

const initialState = {
  id: id,
  family: family,
  email: email,
  firstname: firstname,
  lastname: lastname,
  level: level,
  wallet: wallet,
  operations: operations,
  friends: friends,
  quests: quests,
  expenses: expenses,
  labelList: labelList,
  items: items,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
