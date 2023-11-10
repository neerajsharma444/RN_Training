import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = ({title, image}) => (
  <View style={styles.card}>
    <Image source={{uri: image}} style={styles.image} />
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 10,
    borderRadius: 4,
  },
});

export default Card;
