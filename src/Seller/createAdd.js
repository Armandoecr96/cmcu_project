import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Thumbnail, Text, Left, Body, Right, Button, Card, Item, Icon, 
    Input, View, Footer, FooterTab } from 'native-base';
export default class createAdd extends Component {
    render() {
        return (
            <Container>
                <Content>
                  <View>
                      <Text>Hola</Text>
                  </View>
                </Content>
                <Footer>
                  <FooterTab>
                    <Button vertical
                    onPress={()=>this.props.navigation.navigate('Seller')}>
                      <Icon name="ios-home" style={styles.Icon}/>
                      <Text>Inicio</Text>
                    </Button>
                    <Button vertical
                    onPress={()=> this.props.navigation.navigate('MyAdds')}>
                      <Icon type="FontAwesome" name="inbox" style={styles.Icon}/>
                      <Text style={styles.tabMenuMin}>Mis Anuncios</Text>
                    </Button>
                    <Button vertical active
                    onPress={()=>this.props.navigation.navigate('Add')}>
                      <Icon active name="add-circle" style={styles.Icon}/>
                      <Text style={styles.tabMenuMax}>Anuncia</Text>
                    </Button>
                    <Button vertical>
                      <Icon name="md-chatbubbles" style={styles.Icon}/>
                      <Text style={styles.tabMenuMax}>Mensajes</Text>
                    </Button>
                    <Button vertical>
                      <Icon type="MaterialIcons" name="history" style={styles.Icon}/>
                      <Text style={styles.tabMenuMax}>Historial</Text>
                    </Button>
                  </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    tabMenuMin:{
        fontSize: 6
    },
    tabMenuMax:{
        fontSize: 8.5
    },
    Icon:{
        color: '#4EFF51'
    }
})