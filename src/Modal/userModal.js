import {useState} from 'react';
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
    hobbies: [{hobby: 'Detective'}, {hobby: 'Amazing skills'}],
  });

  return (
    <View>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Add User</Text>
        <TextInput
          style={styles.input_name}
          placeholder="Name"
          value={personsData.name}
          onChangeText={text =>
            setPersonsData(Object.assign({}, personsData, {name: text}))
          }
        />

        <View style={styles.hobbies_container}>
          <TextInput style={styles.input_hobbies} placeholder="Hobbies" />
          <TouchableOpacity>
            <AntIcon
              style={styles.icon}
              name="plus"
              backgroundColor="blue"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <Button
          title="Add"
          color="blue"
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
