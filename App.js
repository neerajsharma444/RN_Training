import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import TodoList from './TodoList';
import SplashScreen from 'react-native-splash-screen';
import UserHobby from './UserHobby';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      {/* <TodoList /> */}
      <UserHobby />
    </Provider>
  );
};

export default App;
