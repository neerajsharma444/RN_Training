// import AsyncStorage from '@react-native-async-storage/async-storage';

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

// export const setRememberMe = isChecked => async dispatch => {
//   try {
//     await AsyncStorage.setItem('rememberMe', isChecked.toString());
//     dispatch({
//       type: 'REMEMBER_ME',
//       payload: isChecked,
//     });
//   } catch (error) {
//     console.error('Error saving rememberMe:', error);
//     throw error;
//   }
// };

// export const persistUserData = userData => async dispatch => {
//   try {
//     await AsyncStorage.setItem('userData', JSON.stringify(userData));
//     dispatch({
//       type: 'PERSIST_USER_DATA',
//       payload: userData,
//     });
//   } catch (error) {
//     console.error('Error persisting user data:', error);
//     throw error;
//   }
// };
