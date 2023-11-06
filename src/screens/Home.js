import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Home = ({route}) => {
  // Passing the data through route
  const {name, location, gender, programmingLanguages, date} = route.params;

  // Parse the serializable date back to a Date object
  const parsedDate = date ? new Date(date) : null;

  return (
    <View style={styles.container}>
      <Header title="Welcome to the Home screen" style={styles.header} />
      <View style={styles.text_container}>
        <Text>Welcome, {name}!</Text>
        <Text>Your location is: {location}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Programming Languages: {programmingLanguages.join(', ')}</Text>
        <Text>Date: {parsedDate ? parsedDate.toDateString() : 'N/A'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {},
  text_container: {
    flex: 0.5,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default Home;
