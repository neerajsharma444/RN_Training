import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import Modal from './src/modal/HobbiesModal';

const App = () => {
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [hobbies, setHobbies] = useState([]);

  const handleAddHobby = hobby => {
    setHobbies([...hobbies, hobby]);
  };

  return (
    <View>
      <FlatList
        data={hobbies}
        keyExtractor={index => index.toString()}
        renderItem={({item}) => <Text>{item}</Text>}
      />
      <Button title="Add Hobbies" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddHobby={handleAddHobby}
      />
    </View>
  );
};

export default App;
