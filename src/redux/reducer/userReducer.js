import * as types from '../actions/types';

const initialState = {
  user: [],
  loginUser: {},
  rememberMe: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return {...state, user: [...state.user, action.payload]};
    case types.LOGIN_USER:
      // console.log(state.user, action.payload, 'stateeeeee');
      return {...state, loginUser: action.payload};
    case types.LOGOUT_USER:
      return {...state, loginUser: null};
    case types.REMEMBER_ME:
      return {...state, rememberMe: action.payload};
    case types.PERSIST_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
