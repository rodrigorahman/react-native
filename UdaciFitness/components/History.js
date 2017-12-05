import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'; 
import { connect } from 'react-redux';
import { receiveEntries, addEntry } from '../actions';
import { timeToString, getDailyReminderValue } from '../utils/helpers';
import { fetchCalendarResults } from '../utils/api'
import UdaciFitnessCalendar from 'udacifitness-calendar'
import { white } from '../utils/colors'
import { AppLoading } from 'expo';

class History extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props;
    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if(!entries[timeToString()]){
          dispatch(addEntry({
            [timeToString]: getDailyReminderValue()
          }))
        }
      })
      .then(() => this.setState({ready: true}))
  }

  renderItem = ({ today, ...metrics }, formattedDate, key) => (
    <View>
      {today 
        ? <Text>{JSON.stringify(today)}</Text>
        : <Text>{JSON.stringify(metrics)}</Text>
      }
    </View>
  )

  renderEmptyDate(formattedDate) {
    return (
      <View>
        <Text>No Data for this day</Text>
      </View>
    )
  }


  render() {
    const { entries } = this.props;
    const { ready } = this.state;

    if(ready === false) {
      return <AppLoading />
    }

    return (

        // <UdaciFitnessCalendar 
        //   items={entries}
        //   renderItem={this.renderItem}
        //   renderEmptyDate={this.renderEmptyDate}
        // />
      <View style={{flex: 1, paddingTop: 20}}>
        <View style={styles.item}>
          <Text style={styles.dataText}>Fodeu essa merda</Text>
        </View>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  dataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }

})


function mapStateToProps(entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(History);