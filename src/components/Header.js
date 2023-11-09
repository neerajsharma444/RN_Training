import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Todo List</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
  },

  heading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '600',
  },
});
