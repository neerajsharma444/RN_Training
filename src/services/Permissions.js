import {PermissionsAndroid, Platform} from 'react-native';

export const getLocationPermission = async () => {
  console.log('getLocationPermission');
  if (Platform.OS == 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'LOCATION REQUESTED',
          message: 'LOCATION REQUESTED',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the LOCATION');
        return true;
      } else {
        console.log('LOCATION REQUESTED permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
  }
};
