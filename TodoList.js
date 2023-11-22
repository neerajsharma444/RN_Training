import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import {
  addTask,
  deleteTask,
  toggleTaskStatus,
  editTask,
} from './src/redux/actions/actions';
import Header from './src/components/Header';

const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const [editingTask, setEditingTask] = useState({task: '', index: -1});

  const handlePress = id => {
    dispatch(deleteTask(id));
  };

  const handleTaskStatus = id => {
    dispatch(toggleTaskStatus(id));
  };

  const submitHandler = task => {
    if (task) {
      if (editingTask.index === -1) {
        dispatch(addTask(task));
      } else {
        dispatch(editTask(editingTask.index, task));
        setEditingTask({task: '', index: -1});
      }
    } else {
      Alert.alert('Please enter a task!!!');
    }
  };

  const cancelEditing = () => {
    setEditingTask({task: '', index: -1});
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.addEditTodo}>
          <TextInput
            style={styles.input}
            placeholder="Add or Edit Todo..."
            onChangeText={text =>
              setEditingTask({task: text, index: editingTask.index})
            }
            value={editingTask.task}
          />
          {editingTask.index === -1 ? (
            <TouchableOpacity>
              {/* <AntIcon name="edit" color="black" size={30} /> */}
              <AntIcon
                onPress={() => submitHandler(editingTask.task)}
                name="plus"
                color="blue"
                backgroundColor="#A1A1A1"
                size={30}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.buttons}>
              <Button
                onPress={() => submitHandler(editingTask.task)}
                title="Save"
                color="green"
              />
              <Button onPress={cancelEditing} title="Cancel" color="red" />
            </View>
          )}
        </View>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({item, index}) => (
              <View style={styles.taskItem}>
                <Text
                  style={[
                    styles.item,
                    item.completed ? styles.completed : null,
                  ]}>
                  {item.task}
                </Text>

                <TouchableOpacity
                  onPress={() => handleTaskStatus(item.id)}
                  style={styles.taskStatus}>
                  {item.completed ? (
                    <AntIcon name="close" color="blue" size={25} />
                  ) : (
                    <AntIcon name="check" color="blue" size={25} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEditingTask({task: item.task, index})}
                  style={styles.editButton}>
                  <AntIcon name="edit" color="black" size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handlePress(item.id)}
                  style={styles.deleteButton}>
                  <AntIcon name="delete" color="red" size={25} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  addEditTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  list: {
    marginTop: '20%',
    borderRadius: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
  },
  taskStatus: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  statusText: {
    color: 'black',
  },
  item: {
    padding: 16,
    borderColor: '#bbb',
    borderRadius: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    backgroundColor: '#A1A1A1',
    borderWidth: 2,
    borderColor: 'red',
  },
  editButton: {
    backgroundColor: 'yellow',
    borderWidth: 2,
    borderColor: '#A1A1A1',
  },
});
