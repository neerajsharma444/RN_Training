import * as types from '../actions/types';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return {...state.user, user: action.payload};
    case types.LOGIN_USER:
      return {...state, user: action.payload};
    case types.LOGOUT_USER:
      return {...state, user: null};
    default:
      return state;
  }
};

export default userReducer;
