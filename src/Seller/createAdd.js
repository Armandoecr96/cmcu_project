import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Thumbnail, Text, Left, Body, Right, Button, Card, Item, Icon, 
    Input, View, Footer, FooterTab } from 'native-base';
import SellerFooterTabs from '../Common/SellerFooterTabs';
export default class createAdd extends Component {
    render() {
        return (
            <Container>
                <Content>
                  <View>
                      <Text>Falata Header, Multipick y Añadir imagen</Text>
                      <Input placeholder="Titulo" />
                      <Input placeholder="Categoria" />
                      <Input placeholder="Horario" />
                      <Input placeholder="Costo" />
                      <Input placeholder="Descripcion" />

                  </View>
                </Content>
                <Footer>
                  <SellerFooterTabs navigation={this.props.navigation} />
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