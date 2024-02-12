import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../redux/actions/actions';
import {Formik} from 'formik';
import * as yup from 'yup';
import GoogleSign from '../components/GoogleSign';
import FacebookSign from '../components/FacebookSign';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const validationSchema = yup.object({
    name: yup
      .string()
      .matches(
        /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
        'Name should only contain alphabets!',
      )
      .min(3, 'Name should have at least 3 digits!')
      .required('Name is required!'),
    email: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format!')
      .required('Email is required!'),
    mobile: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Mobile number should have 10 digits!')
      .required('Mobile is required!'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
        'Password must be at least 6 characters long and include at least one lowercase letter, one uppercase letter, and one digit!',
      )
      .required('Password is required!'),
  });

  const handleRegister = values => {
    dispatch(
      registerUser(values.name, values.email, values.mobile, values.password),
    );
    // Alert.alert('Signed up successfully');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingText}>
        <Text style={styles.register}>Register</Text>
        <Text style={styles.account}>Create your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            mobile: '',
            password: '',
          }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                style={styles.inputStyle}
                maxLength={20}
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                autoCapitalize="none"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.inputStyle}
                placeholder="Mobile"
                maxLength={10}
                value={values.mobile}
                onChangeText={handleChange('mobile')}
                onBlur={handleBlur('mobile')}
                keyboardType="numeric"
              />
              {touched.mobile && errors.mobile && (
                <Text style={styles.errorText}>{errors.mobile}</Text>
              )}
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                autoCapitalize="none"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
              <GoogleSign />
              <FacebookSign />
            </View>
          )}
        </Formik>
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
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  account: {
    color: '#000',
    fontSize: 18,
  },

  inputContainer: {
    // backgroundColor: 'white',
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

  errorText: {
    color: 'red',
    marginHorizontal: 10,
  },

  registerButton: {
    // marginTop: 20,
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
