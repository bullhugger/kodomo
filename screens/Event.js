import React, {Component} from 'react'
import { Dimensions, View } from 'react-native'

import EventCalendar from 'react-native-events-calendar'

let { width } = Dimensions.get('window')

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [
        { start: '2018-09-06 12:30:00', end: '2018-09-06 13:30:00', title: 'Open Day International School@ParCkity', summary: 'Located in Desa ParkCity, our IGCSE syllabus are open for public enquiry. Email info@isp.edu.my for more info.' },
        { start: '2018-09-07 13:30:00', end: '2018-09-07 14:30:00', title: 'Meet and greet teachers', summary: 'Gardens International School' },
        { start: '2018-09-07 14:30:00', end: '2018-09-07 15:30:00', title: 'Ministry of Education', summary: 'Briefing on Visa Application' },
        { start: '2018-09-08 04:10:00', end: '2018-09-08 04:40:00', title: 'Band Performance', summary: 'Eli Monty band performance by ISKL' },
      ]
    }
  }
//Gives an pop up on event details
  _eventTapped (event) {
    alert(JSON.stringify(event))
  }

  render () {
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <EventCalendar
          eventTapped={this._eventTapped.bind(this)}
          events={this.state.events}
          width={width}
          numberOfDay={60}
          initDate={'2018-09-07'}
          scrollToFirst
        />
      </View>
    )
  }
}

export default Event;
