/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import Login from './login/Login'
import Home from './Customer/Home'
import SellerHome from './Seller/sellerHome'
import createAdd from './Seller/createAdd'
import myAdds from './Seller/myAdds'
import seeAdd from './Common/SeeAdd'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

const serverInsideNavigation = createStackNavigator({
  Home: {
    screen: SellerHome,
    navigationOptions: {
      header: null,
    }
  }
})

const ServerNavigation = createDrawerNavigator({
  Navigation: serverInsideNavigation
})

const clientInsideNavigation = createStackNavigator({
  HomeCustomer: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  }
})

const ClientNavigation = createDrawerNavigator({
  Navigation: clientInsideNavigation
})

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Seller: {
    screen: ServerNavigation,
    navigationOptions: {
      header: null,
    }
  },
  Add:{
    screen: createAdd,
    navigationOptions: {
      header: null
    }
  },
  MyAdds:{
    screen: myAdds,
    navigationOptions: {
      header: null
    }
  },
  SeeAdd:{
    screen: seeAdd,
    navigationOptions: {
      headerStyle:{
        backgroundColor: '#3F51B5'
      },
      headerTintColor: '#FFFFFF'
    }
  },
  Customer: {
    screen: ClientNavigation,
    navigationOptions: {
      header: null,
    }
  }
});

export default createAppContainer(AuthNavigator);

