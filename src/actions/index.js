export const setUserToken = (data) => {
  return {
    type: 'SET_USER_TOKEN',
    payload: data,
  };
};

export const setUserInfo = (data) => {
  return {
    type: 'SET_USER_INFO',
    payload: data,
  };
};
