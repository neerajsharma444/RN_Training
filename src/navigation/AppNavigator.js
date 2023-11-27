import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Home from '../screens/Home';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const myApp = useDispatch(state => {
    state.userReducer.loginUser;
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
