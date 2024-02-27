import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#333" />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinnerContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
