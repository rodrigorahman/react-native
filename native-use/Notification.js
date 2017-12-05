import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import { Notifications, Permissions } from "expo";

function createNotification() {
  return {
    title: "Log your stats!",
    body: "don't forget to log your stats for today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export default class Notification extends Component {
  
  componentDidMount() {
    Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
      if (status === "granted") {
        Notifications.scheduleLocalNotificationAsync(createNotification(), {
          time: new Date().getTime() + 1000
        });
      }
    });
    Notifications.addListener(({ origin, data }) => {
      console.log(origin)
      console.log(data)
    })
    

  }

  render() {
    
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
