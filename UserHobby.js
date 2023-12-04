import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

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
  let newUser = {
    name: 'L Lawliet(Ryuzaki)',
    hobbies: [{hobby: 'Detective'}, {hobby: 'Amazing skills'}],
  };
  const renderHobbies = ({item}) => (
    <View>
      <Text style={styles.text}>Hobby: {item.hobby}</Text>
    </View>
  );

  const addUser = () => {
    setUserData([...userData, newUser]);
    // console.log(userData);
  };

  const renderUsersName = ({item}) => (
    <View style={styles.card}>
      <View style={styles.card_container}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <View style={styles.hobbies_container}>
          <FlatList
            data={item.hobbies}
            keyExtractor={hobby => hobby.hobby}
            renderItem={renderHobbies}
          />
          <TouchableOpacity>
            <AntIcon name="plus" size={28} color="black" />
          </TouchableOpacity>
        </View>
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
      <TouchableOpacity style={styles.addButton} onPress={addUser}>
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>
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

  hobbies_container: {
    flexDirection: 'row',
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
