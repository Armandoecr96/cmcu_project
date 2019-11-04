/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import Login from './login/Login'
import Home from './home/Home'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

const serverInsideNavigation = createStackNavigator({
  Home: {
    screen: Home
  }
})

const ServerNavigation = createDrawerNavigator({
  Navigation: serverInsideNavigation
})

const clientInsideNavigation = createStackNavigator({
  Home: {
    screen: Home
  }
})

const ClientNavigation = createDrawerNavigator({
  Navigation: clientInsideNavigation
})

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Server: {
    screen: ServerNavigation
  },
  Client: {
    screen: ClientNavigation
  }
});

export default createAppContainer(AuthNavigator);

