import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const PharmacyModal = ({statePassing, closeModal}) => {
  const [pharmacyData, setPharmacyData] = useState({
    name: '',
    medTypes: [{type: '', meds: ['']}],
  });

  const addMedType = () => {
    setPharmacyData(oldData => {
      const newMedTypes = [...oldData.medTypes, {type: '', meds: ['']}];
      return Object.assign({}, oldData, {medTypes: newMedTypes});
    });
  };

  const addMedicine = index => {
    setPharmacyData(oldData => {
      const updatedMedicine = [...oldData.medTypes];
      updatedMedicine[index].meds.push('');
      return Object.assign({}, oldData, {medTypes: updatedMedicine});
    });
  };

  const updateMedType = (text, index) => {
    setPharmacyData(oldData => {
      const updatedMedTypes = [...oldData.medTypes];
      updatedMedTypes[index] = {type: text, meds: ['']};
      return Object.assign({}, oldData, {medTypes: updatedMedTypes});
    });
  };

  const updateMedicine = (text, index, medIndex) => {
    setPharmacyData(oldData => {
      const updatedMedTypes = [...oldData.medTypes];
      updatedMedTypes[index].meds[medIndex] = text;
      return Object.assign({}, oldData, {medTypes: updatedMedTypes});
    });
  };

  const renderMedTypes = ({item, index}) => (
    <View key={index} style={styles.medTypesContainer}>
      <Text style={styles.medType_text}>Enter Medicine Type</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputMedType}
          value={item.type}
          onChangeText={text => updateMedType(text, index)}
        />
        {index === pharmacyData.medTypes.length - 1 && (
          <TouchableOpacity onPress={addMedType}>
            <Text style={styles.addButton}>Add Type</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.medName_text}>Enter Medicine Name</Text>
      {item.meds.map((medicine, medIndex) => (
        <View key={medIndex} style={styles.medicineContainer}>
          <TextInput
            style={styles.inputMedicine}
            value={medicine}
            onChangeText={text => updateMedicine(text, index, medIndex)}
          />
          {medIndex === item.meds.length - 1 && (
            <TouchableOpacity onPress={() => addMedicine(index)}>
              <Text style={styles.addButton}>Add Medicine</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Add Pharmacy</Text>
      <Text style={styles.name_text}>Enter Pharmacy Name</Text>
      <TextInput
        style={styles.inputName}
        value={pharmacyData.name}
        onChangeText={text =>
          setPharmacyData(oldData => Object.assign({}, oldData, {name: text}))
        }
      />
      {/* {pharmacyData.medTypes.map(renderMedTypeInputs)} */}
      <FlatList
        data={pharmacyData.medTypes}
        renderItem={renderMedTypes}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Save"
          color="blue"
          onPress={() => {
            closeModal();
            statePassing(pharmacyData);
          }}
        />
        <Button title="Cancel" color="red" onPress={closeModal} />
      </View>
    </View>
  );
};

export default PharmacyModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#F2F1EB',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: '700',
  },
  name_text: {
    marginTop: 10,
    fontSize: 20,
    color: 'blue',
    marginBottom: 5,
  },
  inputName: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  medTypesContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  addButton: {
    color: '#fff',
    backgroundColor: 'blue',
    borderRadius: 10,
    fontSize: 18,
    padding: 10,
  },
  inputMedType: {
    width: '60%',
    fontSize: 18,
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  medName_text: {
    marginHorizontal: '10%',
    fontSize: 20,
    color: 'blue',
    marginBottom: 5,
  },
  medicineContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputMedicine: {
    width: '45%',
    marginHorizontal: '10%',
    borderWidth: 1,
    fontSize: 18,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  medType_text: {
    marginHorizontal: 20,
    fontSize: 20,
    color: 'blue',
    marginBottom: 5,
  },
});
