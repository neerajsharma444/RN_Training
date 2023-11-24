export const registerUser = (name, email, mobile, password) => ({
  type: 'REGISTER_USER',
  payload: {name, email, mobile, password},
});

export const loginUser = (email, password, rememberMe) => ({
  type: 'LOGIN_USER',
  payload: {email, password, rememberMe},
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
