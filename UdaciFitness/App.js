import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History';
import { gray } from './utils/colors'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1, backgroundColor: gray}}>
          <History style={{ height: 20 }}/>
        </View>
      </Provider>
    );
  }
}
