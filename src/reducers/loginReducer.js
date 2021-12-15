var user = {
  firstName: null,
  token: null,
  userID: null,
};

const loginReducer = (state = user, action) => {
  switch (action.type) {
    case 'SET_USER_TOKEN':
      state.token = action.payload;
      return state;
    case 'SET_USER_INFO':
      state = { ...state, ...action.payload };
      return state;
    default:
      return state;
  }
};

export default loginReducer;
