import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Exemplo1 extends React.Component {
  render() {
    return (
      <View style={styles.containerPrincipal}>
        <Text  style={styles.title}> Exemplo 1 </Text>
        <View style={styles.container}>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    justifyContent: 'center',
  },
  
  title: {
    margin: 20
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10
  }
});
