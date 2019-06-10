import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Find from './Find'
import Event from './Event'
import Profile from './Profile'

//Place bottom nagivator after login.
export default createBottomTabNavigator({
  Find: {
    screen: Find,
    navigationOptions: {
      tabBarLabel: 'FIND',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../image/search.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Event: {
    screen: Event,
    navigationOptions: {
      tabBarLabel: 'EVENT',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../image/event.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Enrol: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'ENROL',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../image/edit.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../image/profile.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
}, 
{
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#3498db',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
