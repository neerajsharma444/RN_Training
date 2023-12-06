import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const UserModal = ({statePassing, closeModal}) => {
  const [personsData, setPersonsData] = useState({
    name: 'L Lawliet(Ryuzaki)',
    hobbies: [{}], // Initial empty hobby object
  });

  const addHobby = () => {
    setPersonsData({
      ...personsData,
      hobbies: [...personsData.hobbies, {}],
    });
  };

  const updateHobby = (text, index) => {
    const updatedHobbies = [...personsData.hobbies];
    updatedHobbies[index] = {hobby: text};
    setPersonsData({...personsData, hobbies: updatedHobbies});
  };

  const renderHobbies = () => {
    return personsData.hobbies.map((hobby, index) => (
      <View key={index} style={styles.hobbies_container}>
        <TextInput
          style={styles.input_hobbies}
          placeholder="Hobbies"
          value={hobby.hobby}
          onChangeText={text => updateHobby(text, index)}
        />
        {index === personsData.hobbies.length - 1 && (
          <TouchableOpacity onPress={() => addHobby()}>
            <AntIcon
              style={styles.icon}
              name="plus"
              size={35}
              color="#3498db"
            />
          </TouchableOpacity>
        )}
      </View>
    ));
  };

  return (
    <View>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Add User</Text>
        <TextInput
          style={styles.input_name}
          placeholder="Name"
          value={personsData.name}
          onChangeText={text => setPersonsData({...personsData, name: text})}
        />

        {renderHobbies()}

        <Button
          title="Add"
          color="#3498db"
          onPress={() => {
            closeModal();
            statePassing(personsData);
          }}
        />
        <Button title="Cancel" color="#A1A1A1" onPress={closeModal} />
      </View>
    </View>
  );
};

export default UserModal;

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
    fontFamily: 'IBMPlexMono-Bold',
    fontWeight: '700',
  },
  hobbies_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input_name: {
    width: '100%',
    borderWidth: 1,
    fontSize: 18,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  input_hobbies: {
    width: '80%',
    borderWidth: 1,
    fontSize: 18,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    borderRadius: 20,
  },
});
