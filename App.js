import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Camera} from 'react-native-camera-kit';

export default function App() {
  const cameraRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraType, setCameraType] = useState('front');
  const [cameraFlash, setCameraFlash] = useState('off');

  const handleCamera = () => {
    setCameraType(cameraType === 'front' ? 'back' : 'front');
  };

  const handleFlash = () => {
    setCameraFlash(cameraFlash === 'off' ? 'on' : 'off');
  };

  const handleCapture = () => {
    console.log(cameraRef.current);
    if (cameraRef.current) {
      const captureImage = new Promise(async (resolve, reject) => {
        try {
          const imageURI = await cameraRef.current.capture();
          resolve(imageURI);
        } catch (error) {
          reject(error);
        }
      });

      captureImage
        .then(imageURI => {
          setCapturedImage(imageURI);
          setModalVisible(false);
        })
        .catch(error => {
          console.error('Error capturing image:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Looks fun here! Huh</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Icon name="camera" size={20} color="white" />
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Camera
              style={styles.camera}
              ref={cameraRef}
              cameraType={cameraType}
              flashMode={cameraFlash}
              saveToCameraRoll={true}
            />

            <View style={styles.captureButtonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.captureButton}>
                <Icon name="left" color="#517fa4" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCapture}
                style={styles.captureButton}>
                <Icon name="camera" reverse size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCamera}
                style={styles.captureButton}>
                <Icon name="refresh" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleFlash}
                style={styles.captureButton}>
                <Icon name="bolt" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  camera: {
    height: '100%',
    width: '100%',
  },
  captureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 20,
    padding: 10,
  },
  captureButton: {
    // backgroundColor: 'blue',
    borderRadius: 50,
    padding: 20,
    margin: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});
