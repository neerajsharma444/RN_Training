import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Home from '../screens/Home';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const myApp = useSelector(state => state.userReducer.loginUser);
  console.log('App Navigation', myApp);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Register}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
