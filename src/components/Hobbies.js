import React, {useState} from 'react';
import {View, Text, TextInput, Modal, Button, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Hobbies = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [saveHobbies, setSaveHobbies] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  console.log(data);

  const startEditingHobbies = userId => {
    setEditingUserId(userId);
    setSaveHobbies('');
  };

  const handleSaveHobbies = id => {
    setData(prevData => {
      return prevData.map(user => {
        if (user.id === id) {
          user.hobbies.push(saveHobbies);
        }
        return user;
      });
    });

    setSaveHobbies('');
  };

  const addUser = () => {
    if (name && hobbies) {
      const user = {id: data.length + 1, name, hobbies: [hobbies]};
      setData([...data, user]);
      setModalVisible(false);
      setName('');
      setHobbies('');
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.userContainer}>
      {item && (
        <>
          <Text style={styles.userInfo}>Name: {item.name}</Text>
          <Text style={styles.userInfo}>
            Hobbies: {item.hobbies.join(', ')}
          </Text>

          {editingUserId === item.id ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Add Hobby"
                onChangeText={text => setSaveHobbies(text)}
              />
              <Button title="Save" onPress={() => handleSaveHobbies(item.id)} />
            </>
          ) : (
            <TouchableOpacity
              onPress={() => startEditingHobbies(item.id)}
              style={styles.plusIcon}>
              <AntIcon name="plus" size={28} color="black" />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id.toString()}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.modalTitle}>Add User</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Hobbies"
              value={hobbies}
              onChangeText={text => setHobbies(text)}
            />
            <Button title="Add" onPress={addUser} color="blue" />
            <Button
              title="Cancel"
              color="#A1A1A1"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  userContainer: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
  },
  userInfo: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  addButton: {
    padding: 15,
    backgroundColor: '#3498db',
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'IBMPlexMono-Bold',
    fontWeight: '700',
  },
});

export default Hobbies;
