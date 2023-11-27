import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, setRememberMe} from '../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMeLocal] = useState(false);
  const dispatch = useDispatch();
  const registeredUser = useSelector(state => state.userReducer.user);
  console.log('Registered user', registeredUser);
  useEffect(() => {
    const retrieveUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const {email, password, rememberMe} = JSON.parse(userData);
          setEmail(email);
          setPassword(password);
          setRememberMeLocal(rememberMe);
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };

    retrieveUserData();
  }, []);

  useEffect(() => {
    const checkRememberMe = async () => {
      try {
        const rememberMeValue = await AsyncStorage.getItem('rememberMe');
        if (rememberMeValue !== null) {
          setRememberMeLocal(rememberMeValue === 'true');
        }
      } catch (error) {
        console.error('Error checking rememberME:', error);
      }
    };

    checkRememberMe();
  }, []);

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  const handleLogin = async () => {
    const user = {email, password};

    const matchingUsers = registeredUser.filter(
      registeredUser =>
        registeredUser.email === user.email &&
        registeredUser.password === user.password,
    );

    if (matchingUsers.length > 0) {
      dispatch(loginUser(email, password, rememberMe));
      navigation.navigate('Home');

      // Save user data to AsyncStorage if "Remember Me" is checked
      if (rememberMe) {
        try {
          await AsyncStorage.setItem(
            'userData',
            JSON.stringify({email, password, rememberMe}),
          );
        } catch (error) {
          console.error('Error saving user data to AsyncStorage:', error);
        }
      }
    } else {
      Alert.alert('User not registered');
    }
  };

  const handleRememberMe = () => {
    const newValue = !rememberMe;
    setRememberMeLocal(newValue);
    dispatch(setRememberMe(newValue))
      .then(() => {
        // Save "Remember Me" state to AsyncStorage
        AsyncStorage.setItem('rememberMe', newValue.toString());
      })
      .catch(error => console.error('Error setting rememberMe:', error));
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.containerHeading}>
        <Text style={styles.heading}>BIOHACKER</Text>
      </View>
      <View style={styles.containerLogin}>
        <View style={styles.login}>
          <Text style={styles.login_text}>Login</Text>
          <Text>Login to your account</Text>
        </View>

        <View style={styles.email_container}>
          <TextInput
            style={styles.email}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter your email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <View style={styles.password_container}>
            <TextInput
              style={styles.password}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.icon_remember}>
            <TouchableOpacity onPress={handleRememberMe}>
              {rememberMe ? (
                <FontAwesome name="check-square" size={25} />
              ) : (
                <FontAwesome name="square" size={25} />
              )}
            </TouchableOpacity>
            <Text style={styles.rememberMe_text}>Remember Me</Text>
          </View>
        </View>
      </View>
      <View style={styles.login_container}>
        <View style={styles.login_btn}>
          <Pressable onPress={handleLogin}>
            <Text style={styles.pressableLogin}>Login</Text>
          </Pressable>
        </View>
        <View style="styles.signUp_container">
          <Text style={styles.act_signup}>
            Don't have an account?{'  '}
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUp}>SignUp</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  containerHeading: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerLogin: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  login: {
    alignItems: 'center',
  },

  login_text: {
    color: 'blue',
    fontSize: 40,
  },

  heading: {
    fontSize: 35,
    fontWeight: '600',
    color: 'blue',
  },

  loginText: {
    fontSize: 16,
  },

  email_container: {
    width: '100%',
  },

  email: {
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 20,
  },

  password_container: {
    marginTop: 10,
  },

  password: {
    backgroundColor: '#FFF',
    fontSize: 18,
    borderRadius: 20,
    paddingLeft: 20,
  },

  icon_remember: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  rememberMe_text: {
    paddingHorizontal: 10,
    fontSize: 14,
  },

  icon_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  login_container: {
    flex: 0.2,
    justifyContent: 'space-around',
    marginTop: 20,
    alignItems: 'center',
  },

  login_btn: {
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 20,
  },

  signUp_container: {},

  act_signup: {
    fontSize: 16,
  },

  signUp: {
    color: 'blue',
    fontSize: 16,
  },

  pressableLogin: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
