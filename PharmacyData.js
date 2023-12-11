import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PharmacyModal from './src/modal/PharmacyModal';

const PharmacyData = () => {
  const [pharmacyData, setPharmacyData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addPharmacy = newPharmacy => {
    setPharmacyData([...pharmacyData, newPharmacy]);
    setModalVisible(false);
  };

  const renderMeds = ({item}) => (
    <View style={styles.medTypesContainer}>
      <Text style={styles.medTypeText}>{item.type}</Text>
      <FlatList
        data={item.meds}
        renderItem={({item: med, index}) => (
          <Text key={index} style={styles.medicineText}>
            {med}
          </Text>
        )}
      />
    </View>
  );

  const renderPharmacy = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.pharmacyText}>{item.name}</Text>
      <FlatList data={item.medTypes} renderItem={renderMeds} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pharmacy Details</Text>
      <FlatList data={pharmacyData} renderItem={renderPharmacy} />
      <Text style={styles.addData_text}>Add your data here...</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Open Modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <PharmacyModal
          closeModal={() => setModalVisible(false)}
          statePassing={addPharmacy}
        />
      </Modal>
    </View>
  );
};

export default PharmacyData;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
  
    title: {
      fontSize: 30,
      fontWeight: '600',
      alignSelf: 'center',
      color: 'purple',
      marginBottom: 10,
    },
  
    card: {
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
      elevation: 3,
      shadowOpacity: 0.2,
    },
  
    pharmacyText: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 10,
    },
  
    medTypesContainer: {
      marginBottom: 5,
    },
  
    medTypeText: {
      fontSize: 18,
      marginHorizontal: '10%',
      marginBottom: 10,
    },
  
    medicineText: {
      fontSize: 16,
      marginBottom: 5,
      marginHorizontal: '20%',
      color: 'blue',
    },
  
    addData_text: {
      fontSize: 20,
      textAlign: 'center',
      color: 'purple',
    },
  
    addButton: {
      padding: 15,
      backgroundColor: 'blue',
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