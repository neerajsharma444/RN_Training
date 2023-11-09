import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import App from './App';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="App" component={App} options={{tabBarBadge: 1}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
