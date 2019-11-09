import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Thumbnail, Text, Left, Body, Right, Button, Card, Item, Icon, 
    Input, View, Footer, FooterTab } from 'native-base';
export default class sellerHome extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    
                </Header>
                <Content>
                    <View style={{width:'100%', paddingBottom:20}}>
                        <Text style={{fontWeight:'bold', fontSize:25,
                        textAlign:'left', marginLeft:20, paddingBottom:10, paddingTop:10}}>Categorias</Text>
                        <View style={{flexDirection:'row', marginLeft:10}}>
                            <Button bordered rounded info style={{width:'25%'}}>
                                <Text style={{fontSize:12, fontWeight:'bold'}}>Plomero</Text>
                            </Button>
                            <Button bordered rounded info style={{width:'30%'}}>
                                <Text style={{fontSize:11, fontWeight:'bold'}}>Electricista</Text>
                            </Button>
                            <Button bordered rounded info style={{width:'23%'}}>
                                <Text style={{fontSize:12, fontWeight:'bold'}}>Albañil</Text>
                            </Button>
                            <Button bordered rounded info style={{width:'19%'}}>
                                <Text style={{fontSize:12, fontWeight:'bold'}}>Mas...</Text>
                            </Button>
                        </View>
                    </View> 



                  <View style={{width:'100%'}}>
                    <Text style={{fontWeight:'bold', fontSize:18,
                    textAlign:'left', marginLeft:20}}>Contratos</Text>
                  </View>

                    <List>
                        <ListItem thumbnail>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                <Left style={{marginRight:-90}}>
                                  <Thumbnail square large source={require('../../media/images/electricista.jpg')} />
                                </Left>
                                <Body style={{height:'100%', width:'100%'}}>
                                    <Text style={{marginLeft:-15}}>Electricista Industrial</Text>
                                    <Text note numberOfLines={2} style={{width:'100%'}}>Its time to build a difference for the planet and the universe. .</Text>
                                </Body>
                                <Right style={{marginLeft:-90}}>
                                    <Button transparent
                                    onPress={()=> this.props.navigation.navigate('SeeAdd')}>
                                        <Text>Ver más</Text>
                                    </Button>
                                </Right>
                            </Card>
                        </ListItem>

                        <ListItem thumbnail>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                <Left style={{marginRight:-90}}>
                                  <Thumbnail square large source={require('../../media/images/contratista.jpg')} />
                                </Left>
                                <Body style={{height:'100%', width:'100%'}}>
                                    <Text style={{marginLeft:-90}}>Contratista</Text>
                                    <Text note numberOfLines={2} style={{width:'100%'}}>Its time to build a difference . .</Text>
                                </Body>
                                <Right style={{marginLeft:-90}}>
                                    <Button transparent>
                                        <Text>Ver más</Text>
                                    </Button>
                                </Right>
                            </Card>
                        </ListItem>

                        <ListItem thumbnail>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                <Left style={{marginRight:-90}}>
                                    <Thumbnail square large source={require('../../media/images/albañil.jpg')} />
                                </Left>
                                <Body style={{height:'100%', width:'100%'}}>
                                    <Text style={{marginLeft:-120}}>Albañil</Text>
                                    <Text note numberOfLines={2} style={{width:'100%'}}>Its time to build a difference . .</Text>
                                </Body>
                                <Right style={{marginLeft:-90}}>
                                    <Button transparent>
                                        <Text>Ver más</Text>
                                    </Button>
                                </Right>
                            </Card>
                        </ListItem>

                        <ListItem thumbnail>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                <Left style={{marginRight:-90}}>
                                  <Thumbnail square large source={require('../../media/images/plomero.jpg')} />
                                </Left>
                                <Body style={{height:'100%', width:'100%'}}>
                                    <Text style={{marginLeft:-110}}>Plomero</Text>
                                    <Text note numberOfLines={2} style={{width:'100%'}}>Its time to build a difference . .</Text>
                                </Body>
                                <Right style={{marginLeft:-90}}>
                                    <Button transparent>
                                        <Text>Ver más</Text>
                                    </Button>
                                </Right>
                            </Card>
                        </ListItem>

                        <ListItem thumbnail>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                <Left style={{marginRight:-90}}>
                                  <Thumbnail square large source={require('../../media/images/game-icon4.png')} />
                                </Left>
                                <Body style={{height:'100%', width:'100%'}}>
                                    <Text style={{marginLeft:-50}}>Plomero Italiano</Text>
                                    <Text note numberOfLines={2} style={{width:'100%'}}>Its time to build a difference . .</Text>
                                </Body>
                                <Right style={{marginLeft:-90}}>
                                    <Button transparent>
                                        <Text>Ver más</Text>
                                    </Button>
                                </Right>
                            </Card>
                        </ListItem>

                    </List>
                </Content>
                <Footer>
                  <FooterTab>
                    <Button vertical active>
                      <Icon active name="ios-home" style={styles.Icon}/>
                      <Text>Inicio</Text>
                    </Button>
                    <Button vertical
                    onPress={()=>this.props.navigation.navigate('MyAdds')}>
                      <Icon type="FontAwesome" name="inbox" style={styles.Icon}/>
                      <Text style={styles.tabMenuMin}>Mis Anuncios</Text>
                    </Button>
                    <Button vertical
                    onPress={()=>this.props.navigation.navigate('Add')}>
                      <Icon name="add-circle" style={styles.Icon}/>
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