import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Camera} from 'react-native-camera-kit';
import {Icon} from 'react-native-vector-icons/MaterialIcons';
import {SheetProvider} from 'react-native-actions-sheet';
import MySheet from './MySheet';

const App = () => {
  const cameraRef = useRef(null);
  const [name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraType, setCameraType] = useState('front');
  const [cameraFlash, setCameraFlash] = useState('off');

  const handleCamera = () => {
    setCameraType(cameraType == 'front' ? 'back' : 'front');
  };
  const handleFlash = () => {
    setCameraFlash(cameraFlash == 'off' ? 'on' : 'off');
  };

  const handleCapture = async () => {
    console.log(cameraRef.current);
    if (cameraRef.current) {
      const captureImage = new Promise(async (res, rej) => {
        try {
          const imageURI = await cameraRef.current.capture();
          res(imageURI);
        } catch (err) {
          rej(err);
        }
      });
      captureImage
        .then(imageURI => {
          setCapturedImage(imageURI);
          setModalVisible(false);
        })
        .catch(err => {
          console.error('Error in capturing your image', err);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>
        Hey there! look here
      </Text>
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
              style={{height: '85%', width: '100%'}}
              ref={cameraRef}
              cameraType={cameraType}
              flashMode={cameraFlash}
              saveToCameraRoll={true}
            />

            <View style={styles.captureButtonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.captureButton}>
                {/* <Text style={styles.captureText}>Back</Text> */}
                <Icon name="camera-alt" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCapture}
                style={[styles.captureButton, {width: 50}]}>
                <Text style={styles.captureText}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCamera}
                style={styles.captureButton}>
                <Text style={styles.captureText}>Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleFlash}
                style={styles.captureButton}>
                <Text style={styles.captureText}>Flash</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    width: 250,
    borderRadius: 15,

    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  capturedImageContainer: {
    alignItems: 'center',
    margin: 20,
  },
  capturedImage: {
    width: 200,
    height: 200,
  },
  cameraContainer: {},

  captureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 20,
    padding: 10,
  },
  captureButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 20,
    margin: 25,
  },
  captureText: {
    color: 'white',
    fontSize: 18,
  },
  camera: {
    flex: 1,
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
  button: {
    height: 40,
    width: 250,
    borderRadius: 15,
    alignSelf: 'center',
    padding: 10,
    elevation: 2,
    marginBottom: 15,
    textAlign: 'center',
  },
  Hidebutton: {
    height: 40,
    width: 180,
    borderRadius: 15,
    alignSelf: 'center',
    padding: 10,
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  HidebuttonClose: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
