import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import EditTodo from './editTodo';

const AddTodo = ({submitHandler}) => {
  const [task, setTask] = useState('');

  const changeHandler = val => {
    setTask(val);
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(task)}
        title="Add Todo"
        color="blue"
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  input: {
    fontSize: 18,
    paddingHorizontal: '20%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
