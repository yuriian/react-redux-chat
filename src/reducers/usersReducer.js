const usersInitState = ['Alex', 'John', 'Sam', 'George', 'Andrew'];

const usersReducer = (state = usersInitState, action = {}) => {
  switch (action.type) {
  case '0':
    return state;

  default:
    return state;
  }
};

export default usersReducer;
