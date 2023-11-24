import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, loginUser, logoutUser} from '../redux/actions/actions';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  console.log('User Details', user);

  const handleRegister = () => {
    dispatch(registerUser(name, email, mobile, password));

    // navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingText}>
        <Text style={{color: 'white', fontSize: 50}}>Register</Text>
        <Text style={{color: 'white', fontSize: 30}}>
          Register Your Account
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="mobile"
          value={mobile}
          keyboardType="numeric"
          onChangeText={text => setMobile(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          //   onChangeText={text => setFormData({...formData, phoneno: text})}
        />
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.submitContainer}>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              width: '100%',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    // margin: 10,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  headingText: {
    // paddingTop: 10,
    flex: 0.25,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    backgroundColor: 'pink',
    flex: 0.75,
    justifyContent: 'space-evenly',
  },

  inputStyle: {
    // flex: 0.2,
    paddingLeft: 15,
    // width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20,
  },

  submitContainer: {
    backgroundColor: 'white',
    // width: '100%',
    borderRadius: 20,
    marginHorizontal: 20,
  },
});
