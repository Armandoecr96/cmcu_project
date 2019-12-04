import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Button, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';
export default class Sidebar extends Component{
    constructor() {
        super();
        /*Array of the sidebar navigation option with 
        Heading, Subheading and screen to navigate.*/
        //Sreen to navigate can be any screen defined in Drawer Navigator in App.js
        this.options = [
          {
            mainHeading: 'Mi Perfil',
            typeIcon: "Entypo",
            icon: "user",
            window: "Login"
          },
          {
            mainHeading: 'Reseñas de Anuncios',
            typeIcon: "MaterialIcons",
            icon: "rate-review",
            window: "Login"
          },
          {
            mainHeading: 'Configuración',
            typeIcon: "SimpleLineIcons",
            icon: "settings",
            window: "Login"
          },
          {
            mainHeading: 'Legal',
            typeIcon: "FontAwesome",
            icon: "legal",
            window: "Login"
          },
          {
            mainHeading: 'Ayuda',
            typeIcon: "MaterialCommunityIcons",
            icon: "help-circle-outline",
            window: "Login"
          },
          {
            mainHeading: 'Cerrar Sesión',
            typeIcon: "Entypo",
            icon: "log-out",
            window: "Login"
          },
        ];
      }

      navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
      };
    render() {
        return(
          <View>
            <ScrollView>
              <Card transparent>
                <CardItem style={{height:100}}>
                  <Left style={{marginRight:-60}}>
                      <Thumbnail circular large 
                      source={require('../../media/images/electricista.jpg')} 
                      style={{width:80, height: 80, borderRadius: 100 }}
                      />
                  </Left>
                  <Body style={{width:'100%', paddingVertical:20}}>
                    <Text style={{fontWeight: 'bold'}}>Pedro PiernasLargas</Text>
                    <Text>Administrador</Text>
                  </Body>
                </CardItem>
                {this.options.map((option, key) => (
                  <CardItem button style={{height:80}} onPress={()=>this.props.navigation.navigate(option.window)}>
                    <Icon type={option.typeIcon} name={option.icon}/>
                    <Text style={{fontWeight:'bold'}}>{option.mainHeading}</Text>
                  </CardItem>           
                ))}
              </Card>
            </ScrollView>
          </View>
        )
    }
}

const style = StyleSheet.create({
  button:{
    
  }
})