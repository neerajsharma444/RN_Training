import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);

  function passHandling() {
    setShowPass(!showPass);
  }

  function handleInfo() {
    //Alert.alert('Your Info ', 'Email : ' + email + '\n Password : ' + pass);
    Alert.alert(`Your Info: Email ${email} \n Password ${pass}`);
  }

  return (
    <View style={styles.main_container}>
      <View style={styles.containerHeading}>
        <Text style={styles.heading}>BIOHACKER</Text>
      </View>
      <View style={styles.containerLogin}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'blue', fontSize: 40}}>Login</Text>
          <Text>Login to your account</Text>
        </View>

        <View style={{width: '100%'}}>
          <TextInput
            style={styles.email}
            onChangeText={text => setEmail(text)}
            autoCorrect={false}
            placeholder="Enter your email"></TextInput>

          <View style={{marginTop: 10}}>
            <TextInput
              style={styles.password}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your password"
              onChangeText={text => setPass(text)}
              secureTextEntry={!showPass}></TextInput>
            <TouchableOpacity style={{flex: 0.1}} onPress={passHandling}>
              <Image
                style={styles.image}
                source={
                  showPass
                    ? require('./img/visibility_off.png')
                    : require('./img/visibility_on.png')
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'space-between',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <View
          style={{backgroundColor: 'blue', width: '100%', borderRadius: 20}}>
          <Pressable onPress={handleInfo}>
            <Text style={styles.pressableLogin}>Login</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.signUp}>
            If you don’t have an account?{'  '}
            <Text style={{color: 'blue'}}>Sign up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    // backgroundColor: 'gray',
    padding: 20,
  },

  containerHeading: {
    flex: 0.3,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerLogin: {
    // backgroundColor: 'pink',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },

  loginText: {
    fontSize: 16,
  },

  email: {
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 20,
  },

  password: {
    backgroundColor: '#FFF',
    fontSize: 20,
    borderRadius: 20,
    paddingLeft: 20,
  },

  image: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 10,
    bottom: 20,
  },

  forgotPass: {
    // alignSelf: 'flex-end',
    textAlign: 'right',
    paddingTop: 10,
  },

  signUp: {
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
