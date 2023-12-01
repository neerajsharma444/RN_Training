import React, {useState} from 'react';
import {Modal, View, Text, TextInput, Button} from 'react-native';

const HobbiesModal = ({visible, onClose, onAddHobby}) => {
  const [newHobby, setNewHobby] = useState('');

  const handleAddHobby = () => {
    onAddHobby(newHobby);
    setNewHobby('');
    onClose();
  };

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View>
        <Text>Add Hobby:</Text>

        <TextInput
          value={newHobby}
          onChangeText={setNewHobby}
          placeholder="Enter hobby"
        />

        <Button title="Add" onPress={handleAddHobby} />
      </View>
    </Modal>
  );
};

export default HobbiesModal;
