/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import Login from './login/Login'
import CustomerHome from './Customer/Home'
import SellerHome from './Seller/sellerHome'
import createAdd from './Seller/createAdd'
import myAdds from './Seller/myAdds'
import seeAdd from './Common/SeeAdd'

import { createAppContainer, DrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Sidebar from './Common/Sidebar'

import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
  Button,
} from 'react-native';
import CustomerSidebar from './Common/CustomerSidebar'
import SeeAddCustomer from './Common/SeeAddCustomer'
import FavAdd from './Customer/FavAdd'
import RecoAdd from './Customer/RecoAdd'


// class NavigationDrawerStructure extends Component {
//   toggleDrawer = () => {
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           {/*Donute Button Image */}
//           {/* <Image
//             source={require('./image/drawer.png')}
//             style={{ width: 25, height: 25, marginLeft: 5 }}
//           /> */}
//           <Text>Menu</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }


const sellerInsideNavigation = createStackNavigator({
  SellerHome: {
    screen: SellerHome,
    navigationOptions: {
      header: null,
    }
  },
  Add:{
    screen: createAdd,
    navigationOptions: {
      headerStyle:{
        backgroundColor: '#3F51B5'
      },
      headerTintColor: '#FFFFFF'
    }
  },
  MyAdds:{
    screen: myAdds,
    navigationOptions: {
      header: null
    }
  },
})

const SellerNavigation = createDrawerNavigator({
  HomeBar: sellerInsideNavigation,
  SellerPerfil: sellerInsideNavigation,
  SellerReseñas: sellerInsideNavigation,
  Settings: sellerInsideNavigation,
  Legal: sellerInsideNavigation,
  Ayuda: sellerInsideNavigation,
},
{contentComponent: Sidebar}
)

const customerInsideNavigation = createStackNavigator({
  HomeCustomer: {
    screen: CustomerHome,
    navigationOptions: {
      header: null,
    }
  },
  FavAnuncios: {
    screen: FavAdd,
    navigationOptions: {
      header: null,
    }
  },
  RecAnuncios: {
    screen: RecoAdd,
    navigationOptions: {
      header: null,
    }
  },
  Chat: {
    screen: CustomerHome,
    navigationOptions: {
      header: null,
    }
  },
  Historic: {
    screen: CustomerHome,
    navigationOptions: {
      header: null,
    }
  }
})

const CustomerNavigation = createDrawerNavigator({
  HomeBarCust: customerInsideNavigation,
  CustomerReseñas: customerInsideNavigation,
  SettingsCust: customerInsideNavigation,
  Legal: customerInsideNavigation,
  Ayuda: customerInsideNavigation,
  },
  {contentComponent: CustomerSidebar}
)

const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Seller: {
    screen: SellerNavigation,
    navigationOptions: {
      header: null,
    }
  },
  Add:{
    screen: createAdd,
    navigationOptions: {
      headerStyle:{
        backgroundColor: '#3F51B5'
      },
      headerTintColor: '#FFFFFF'
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
  CustomerSeeAdd:{
    screen: SeeAddCustomer,
    navigationOptions: {
      headerStyle:{
        backgroundColor: '#3F51B5'
      },
      headerTintColor: '#FFFFFF'
    }
  },
  Customer: {
    screen: CustomerNavigation,
    navigationOptions: {
      header: null,
    }
  }
});

const Drawer = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: { screen: AuthNavigator },
  },
  // {
    // contentComponent: Sidebar
    // drawerWidth: Dimensions.get('window').width - 120,
  // }
);

export default createAppContainer(AuthNavigator);

