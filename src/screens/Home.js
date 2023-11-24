import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <View>
      <Text>Your Name is : {user.name}</Text>
      <Text>Your Email is : {user.email}</Text>
      <Text>Your Mobile Number is : {user.mobile}</Text>
      <Text>Your Email is : {user.password}</Text>
    </View>
  );
};

export default Home;
