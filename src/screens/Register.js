import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../redux/actions/actions';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log('sign up', user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(registerUser(name, email, mobile, password));
    // Alert.alert('Signed up succesfully');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingText}>
        <Text style={styles.register}>Register</Text>
        <Text style={styles.account}>Create your account</Text>
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
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Mobile"
          value={mobile}
          onChangeText={text => setMobile(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          autoCapitalize="none"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
    padding: 20,
  },

  headingText: {
    flex: 0.25,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },

  register: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  account: {
    color: 'black',
    fontSize: 18,
  },

  inputContainer: {
    backgroundColor: 'white',
    flex: 0.75,
    justifyContent: 'space-evenly',
    borderRadius: 10,
    padding: 20,
  },

  inputStyle: {
    paddingLeft: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    height: 50,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },

  registerButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
