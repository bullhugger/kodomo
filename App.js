import React, { Component } from "react";
import {
  StyleSheet,
} from "react-native";

import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import Home from './screens/Home'
import EditProfile from './screens/EditProfile'

export default class App extends Component{
  render(){
    return(
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = createAppContainer(createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  Home: {
    screen: Home
  },
  EditProfile: {
    screen: EditProfile
  }
},
  {
    headerMode: 'none',
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});