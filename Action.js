import React, {useRef} from 'react';
import {View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actions-sheet';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Action = () => {
  const actionSheetRef = useRef();

  const showActionSheet = () => {
    actionSheetRef.current.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current.hide();
  };
  const handleActionSheet = index => {
    if (index === 0) {
      openImagePicker()
        .then(image => {
          console.log('Selected Image:', image);
        })
        .catch(error => {
          console.error('Image Selection Error:', error);
        });
    } else if (index === 1) {
      openCamera()
        .then(image => {
          console.log('Captured Image:', image);
        })
        .catch(error => {
          console.error('Error Capturing Image:', error);
        });
    }
  };

  const openImagePicker = () => {
    return new Promise((resolve, reject) => {
      ImagePicker.openPicker({
        cropping: true,
      })
        .then(image => {
          resolve(image);
          // console.log(image);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const openCamera = () => {
    return new Promise((resolve, reject) => {
      ImagePicker.openCamera({
        width: 300,
        cropping: 400,
        cropping: true,
      }).then(image => {
        resolve(image);
        // console.log(image);
      });
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Select Image" onPress={showActionSheet} />
      <ActionSheet
        ref={actionSheetRef}
        options={['Choose from Gallery', 'Take Photo', 'Cancel']}
        cancelButtonIndex={2}
        onPress={handleActionSheet}>
        <View
          style={{
            height: 300,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={openCamera}>
            <Icons name="camera" size={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openImagePicker}>
            <Icons name="view-gallery-outline" size={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={closeActionSheet}>
            <Icons name="cancel" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Action;
