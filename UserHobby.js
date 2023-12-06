import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import UserModal from './src/modal/userModal';

const data = [
  {
    name: 'Shinigami',
    hobbies: [{hobby: 'Eyes'}, {hobby: 'Apples'}],
  },
  {
    name: 'Yagami Light',
    hobbies: [{hobby: 'DeathNote'}, {hobby: 'God of New World'}],
  },
];

const UserHobby = () => {
  const [userData, setUserData] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);

  const renderHobbies = ({item}) => (
    <View>
      <Text style={styles.text}>Hobby: {item.hobby}</Text>
    </View>
  );

  const addUser = newUser => {
    // console.log(userData);
    setUserData([...userData, newUser]);
    // console.log(userData);
  };

  const renderUsersName = ({item}) => (
    <View style={styles.card}>
      <View style={styles.card_container}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <FlatList
          data={item.hobbies}
          keyExtractor={hobby => hobby.hobby}
          renderItem={renderHobbies}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
        keyExtractor={user => user.name}
        renderItem={renderUsersName}
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
        <UserModal
          closeModal={() => setModalVisible(false)}
          statePassing={addUser}
        />
      </Modal>
    </View>
  );
};

export default UserHobby;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },

  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },

  text: {
    fontSize: 18,
    fontFamily: 'DancingScript-Bold',
    padding: 5,
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
});
