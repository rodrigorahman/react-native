import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo1 from './exemplo1';
import Exemplo2 from './exemplo2';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Exemplo1 />
        <Exemplo2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10
  }
});
