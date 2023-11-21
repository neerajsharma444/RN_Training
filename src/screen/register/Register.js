import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import {Camera, CameraType} from 'react-native-camera-kit';
import ImagePicker from 'react-native-image-crop-picker';
export const Register = props => {
  const cameraRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [first_name, setFirstName] = useState('');
  const [genderselectedId, setGenderSelectedId] = useState();
  const [modalVisible, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const openPicker = () => {
    // ImagePicker.openPicker({
    //   multiple: false,
    // }).then(images => {
    //   console.log(images);
    //   setImageUrl(images.path);
    // });
    // ImagePicker.openCamera({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    // });
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <KeyboardAwareScrollView
        enableAutomaticScroll={true}
        // keyboardShouldPersistTaps={'handled'}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}>
        <View>
          <Text> Select DOB</Text>
          <TouchableOpacity
            style={styles.dateContainer}
            onPress={() => setOpen(true)}>
            <Text>
              {' '}
              {date.toString()}
              {/* {moment(date).format('DD-MM-YYYY')} */}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text> Select DOB using format</Text>
            <TouchableOpacity
              style={styles.dateContainer}
              onPress={() => setOpen(true)}>
              <Text> {moment(date).format('DD-MM-YYYY')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.dateContainer}
            onPress={() => setModal(!modalVisible)}>
            <Text> Select Image</Text>
          </TouchableOpacity>
          {imageUrl && (
            <Image
              style={styles.tinyLogo}
              source={{
                uri: imageUrl,
                //uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          )}
        </View>

        <View>
          <TouchableOpacity
            style={styles.dateContainer}
            onPress={() => openPicker()}>
            <Text> Select Image from Picker</Text>
          </TouchableOpacity>
          {imageUrl && (
            <Image
              style={styles.tinyLogo}
              source={{
                uri: imageUrl,
                //uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          )}
        </View>
      </KeyboardAwareScrollView>

      <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        maximumDate={new Date('2024-12-31')}
        minimumDate={new Date('2022-01-01')}
        androidVariant={'nativeAndroid'} //nativeAndroid
        minuteInterval={2}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        is24hourSource={'locale'}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModal(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Camera
            ref={cameraRef}
            style={{flex: 0.8}}
            cameraType={CameraType.Back} // front/back(default)
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={async () => {
              console.log(cameraRef, 'cameraRef');
              let image = await cameraRef.current.capture();
              setImageUrl(image.uri);
              console.log('image', 'image..');
              setModal(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Click Photo and Hide Modal</Text>
          </Pressable>
          {/* <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    //flex: 1,
  },
  dateContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
  tinyLogo: {
    height: 50,
    width: 50,
  },
});
