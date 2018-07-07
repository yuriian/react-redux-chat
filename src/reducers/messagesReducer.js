const messagesInitState = [];

const messagesReducer = (state = messagesInitState, action = {}) => {
  switch (action.type) {
  case '0':
    return state;

  default:
    return state;
  }
};

export default messagesReducer;
