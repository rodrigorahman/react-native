import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Exemplo2 extends React.Component {
  render() {
    return (
      <View style={styles.containerPrincipal}>
        <Text  style={styles.title}> Exemplo 2 </Text>
        <View style={styles.container}>
          <View style={[styles.box, {flex: 1}]}/>
          <View style={[styles.box, {flex: 2, alignSelf: 'flex-end'}]}/>
          <View style={[styles.box, {flex: 1}]}/>
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10
  }
});
