import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LoginButton, AccessToken, Profile} from 'react-native-fbsdk-next';

interface CurrentProfile {
  name?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  linkURL?: string | null;
  email?: string | null;
  userID?: string | null;
}

const FacebookSign: React.FC = () => {
  const [profile, setProfile] = useState<CurrentProfile | null>(null);

  const getProfile = (): void => {
    Profile.getCurrentProfile().then(
      (currentProfile: CurrentProfile | null) => {
        if (currentProfile) {
          setProfile(currentProfile);
          console.log(
            'Name of user is: ' +
              currentProfile.name +
              'First Name of user is: ' +
              currentProfile.firstName +
              'Middle Name of user is: ' +
              currentProfile.middleName +
              'Last Name of user is: ' +
              currentProfile.lastName +
              'Link URL of user is: ' +
              currentProfile.linkURL +
              'Email of user is: ' +
              currentProfile.email +
              'His profile id is: ' +
              currentProfile.userID,
          );
        } else {
          console.log('No user profile available.');
        }
      },
    );
  };

  const loginHandler = (): void => {
    AccessToken.getCurrentAccessToken().then((data: any) => {
      if (data) {
        getProfile();
      }
    });
  };

  const logoutHandler = (): void => {
    setProfile(null);
  };

  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      {!profile ? (
        <LoginButton
          style={{width: 200, height: 40}}
          onLoginFinished={(error: any, result: any) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              loginHandler();
            }
          }}
          onLogoutFinished={() => {
            logoutHandler();
            console.log('logout.');
          }}
        />
      ) : (
        <View>
          <Text>Welcome, {profile.name}</Text>
          <Text>Email: {profile.email}</Text>
          <TouchableOpacity onPress={logoutHandler}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FacebookSign;
