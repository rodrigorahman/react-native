import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import Live from './Live'
import Notification from './Notification'
import Camera from './Camera'

const Home = () => (
  <View>
    <Text>Hello!</Text>
  </View>
);


function NativeStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  Geolocation: {
    screen: Live, 
    navigationOptions: {
      tabBarLabel: 'Geolocation',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  Notification: {
    screen: Notification, 
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  Camera: {
    screen: Camera, 
    navigationOptions: {
      tabBarLabel: 'Camera',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-camera' size={30} color={tintColor} />
    },
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NativeStatusBar backgroundColor={'#c0c0c0'} barStyle="light-content" />
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
