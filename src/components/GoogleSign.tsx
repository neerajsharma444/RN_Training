import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  NativeModuleError,
} from '@react-native-google-signin/google-signin';

const GoogleSign: React.FC = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '458801719605-ad9fvrt8me5qp9cekotm51u4ag2c16ko.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const googleSignIn = async (): Promise<void> => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign-In Success:', userInfo);
    } catch (error) {
      const err = error as NativeModuleError;
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google Sign-In Cancelled');
      } else if (err.code === statusCodes.IN_PROGRESS) {
        console.log('Google Sign-In is in progress');
      } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services are not available or outdated');
      } else {
        console.error('Google Sign-In Error:', error);
      }
    }
  };

  return (
    <View style={styles.google_container}>
      <GoogleSigninButton
        style={{width: 192, height: 48, alignSelf: 'center'}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
      />
    </View>
  );
};

export default GoogleSign;

const styles = StyleSheet.create({
  google_container: {
    alignItems: 'center',
    marginTop: 20,
  },
});
