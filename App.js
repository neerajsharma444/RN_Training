// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   TextInput,
//   Alert,
//   Button,
// } from 'react-native';
// import Header from './src/components/Header';

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [editingTask, setEditingTask] = useState({task: '', index: -1});

//   const handlePress = id => {
//     setTasks(prevTasks => {
//       return prevTasks.filter(task => task.id !== id);
//     });
//   };

//   const handleTaskStatus = id => {
//     setTasks(prevTasks => {
//       return prevTasks.map(task => {
//         if (task.id === id) {
//           return {...task, completed: !task.completed};
//         }
//         return task;
//       });
//     });
//   };

//   const submitHandler = task => {
//     if (task) {
//       if (editingTask.index === -1) {
//         setTasks(prevTasks => [
//           {id: Math.random().toString(), task: task, completed: false},
//           ...prevTasks,
//         ]);
//       } else {
//         setTasks(prevTasks => {
//           const updatedTasks = [...prevTasks];
//           updatedTasks[editingTask.index].task = task;
//           return updatedTasks;
//         });
//         setEditingTask({task: '', index: -1});
//       }
//     } else {
//       Alert.alert('Please enter a task!!!');
//     }
//   };

//   const cancelEditing = () => {
//     setEditingTask({task: '', index: -1});
//   };

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.content}>
//         <View style={styles.addEditTodo}>
//           <TextInput
//             style={styles.input}
//             placeholder="Add or Edit Todo..."
//             onChangeText={text =>
//               setEditingTask({task: text, index: editingTask.index})
//             }
//             value={editingTask.task}
//           />
//           {editingTask.index === -1 ? (
//             <Button
//               onPress={() => submitHandler(editingTask.task)}
//               title="Add"
//               color="blue"
//             />
//           ) : (
//             <View style={styles.buttons}>
//               <Button
//                 onPress={() => submitHandler(editingTask.task)}
//                 title="Save"
//                 color="green"
//               />
//               <Button onPress={cancelEditing} title="Cancel" color="red" />
//             </View>
//           )}
//         </View>
//         <View style={styles.list}>
//           <FlatList
//             data={tasks}
//             renderItem={({item, index}) => (
//               <View style={styles.taskItem}>
//                 <Text
//                   style={[
//                     styles.item,
//                     item.completed ? styles.completed : null,
//                   ]}>
//                   {item.task}
//                 </Text>
//                 <TouchableOpacity
//                   onPress={() => handleTaskStatus(item.id)}
//                   style={styles.taskStatus}>
//                   <Text style={styles.statusText}>
//                     {item.completed ? 'Completed' : 'Incomplete'}
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => handlePress(item.id)}
//                   style={styles.deleteButton}>
//                   <Text style={styles.deleteText}>Delete</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => setEditingTask({task: item.task, index})}
//                   style={styles.editButton}>
//                   <Text style={styles.editText}>Edit</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     padding: 40,
//   },
//   addEditTodo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   input: {
//     width: '70%',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     padding: 5,
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   list: {
//     marginTop: '20%',
//     borderRadius: 10,
//   },
//   taskItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderWidth: 1,
//     borderColor: '#bbb',
//     paddingHorizontal: 40,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   taskStatus: {
//     backgroundColor: 'lightgray',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//   },
//   statusText: {
//     color: 'black',
//   },
//   item: {
//     padding: 16,
//     borderColor: '#bbb',
//     borderRadius: 10,
//   },
//   completed: {
//     textDecorationLine: 'line-through',
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 8,
//     borderRadius: 5,
//   },
//   deleteText: {
//     color: 'white',
//   },
//   editButton: {
//     backgroundColor: 'yellow',
//     padding: 8,
//     borderRadius: 5,
//   },
//   editText: {
//     color: 'black',
//   },
// });

// export default App;

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import TodoList from './TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
