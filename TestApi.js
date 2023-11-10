import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const TestApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error('Error in fetching the data: ', err);
      });
  }, []);

  //   const renderedData = data.slice(0, 10);

  const renderItem = ({item}) => (
    <View>
      <Text style={styles.title}>{JSON.stringify(item, null, 3)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading_text}>
        Hey boi your dummy data goes here!!!
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TestApi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F3A3A',
  },
  heading_text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  title: {
    color: '#fff',
  },
});
