import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

const cam = () => {
  const [cameraPhoto, getCameraPhoto] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      getCameraPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Wanna capture something? Here you go man :)
      </Text>
      <View style={styles.open_cam_container}>
        <TouchableOpacity onPress={openCamera} style={styles.button}>
          <Text style={styles.buttonText}>OpenCamera</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.close_cam_container}>
        <Image style={styles.imageStyle} source={{uri: cameraPhoto}} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default cam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 25,
  },
  open_cam_container: {
    marginTop: 20,
    flex: 0.5,
  },
  button: {
    backgroundColor: 'coral',
    width: '100%',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});
