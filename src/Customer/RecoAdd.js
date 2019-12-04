import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Thumbnail, Text, Left, Body, Right, Button, Card, Item, Icon, 
    Input, View, Footer, FooterTab, CardItem } from 'native-base';
import CustFooterTabs from '../Common/CustFooterTabs'

export default class RecoAdd extends Component {

    toggleDrawer = () => {
        this.props.navigation.toggleDrawer();
    };

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Left style={{width:"12%", flex:0, backgroundColor:"#000"}}>
                        <Button style={{width:'100%', alignContent:'flex-start', textAlign:'left'}} onPress={this.toggleDrawer.bind(this)}>
                            <Icon type="Ionicons" name="md-menu" style={{width:30, color:'#fff', fontSize:40, marginLeft:0}}/>
                        </Button>
                        
                    </Left>
                    <Item style={{width:'100%'}}>
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
                    <Text style={{fontWeight:'bold', fontSize:15,
                    textAlign:'left', marginLeft:20}}>Recomendados</Text>
                  </View>

                    <List>
                        <ListItem thumbnail button onPress={()=> this.props.navigation.navigate('CustomerSeeAdd')}>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                  <Thumbnail square large source={require('../../media/images/electricista.jpg')} />
                                <Body style={{height:'100%', width:'100%', paddingLeft:10}}>
                                    <CardItem transparent style={{paddingBottom:0, paddingTop:0, paddingLeft:0, paddingRight: 5}}>
                                        <Body>
                                            <Text>Electricista Industrial</Text>   
                                        </Body>
                                        <Right style={{marginLeft:-50}}>
                                            <Text>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                            </Text>        
                                        </Right>
                                    </CardItem>
                                    
                                    <Text note numberOfLines={2} style={{width:'100%'}}>Its time to build a difference for the planet and the universe. .</Text>
                                </Body>
                            </Card>
                        </ListItem>

                        <ListItem thumbnail button onPress={()=> this.props.navigation.navigate('CustomerSeeAdd')}>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                  <Thumbnail square large source={require('../../media/images/albañil.jpg')} />
                                <Body style={{height:'100%', width:'100%', paddingLeft:10}}>
                                    <CardItem transparent style={{paddingBottom:0, paddingTop:0, paddingLeft:0, paddingRight: 5}}>
                                        <Body>
                                            <Text>Maestro Albañil</Text>   
                                        </Body>
                                        <Right style={{marginLeft:-50}}>
                                            <Text>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                            </Text>        
                                        </Right>
                                    </CardItem>
                                    
                                    <Text note numberOfLines={2} style={{width:'100%'}}>Its time to build a difference for the planet and the universe. .</Text>
                                </Body>
                            </Card>
                        </ListItem>

                        <ListItem thumbnail button onPress={()=> this.props.navigation.navigate('CustomerSeeAdd')}>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                  <Thumbnail square large source={require('../../media/images/contratista.jpg')} />
                                <Body style={{height:'100%', width:'100%', paddingLeft:10}}>
                                    <CardItem transparent style={{paddingBottom:0, paddingTop:0, paddingLeft:0, paddingRight: 5}}>
                                        <Body>
                                            <Text>Contratista Bueno</Text>   
                                        </Body>
                                        <Right style={{marginLeft:-50}}>
                                            <Text>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                                <Icon name="star" style={{color:'#D8DC54', fontSize:20}}></Icon>
                                            </Text>        
                                        </Right>
                                    </CardItem>
                                    
                                    <Text note numberOfLines={2} style={{width:'100%'}}>Its time to build a difference for the planet and the universe. .</Text>
                                </Body>
                            </Card>
                        </ListItem>
                    </List>
                </Content>
                <Footer>
                  <CustFooterTabs navigation={this.props.navigation}/>
                </Footer>
            </Container>
        );
    }
}