import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('Token generated: ', token);
  } catch (error) {
    console.log('Token generaing token: ', error);
  }
};

getToken();
