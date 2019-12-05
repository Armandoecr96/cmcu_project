import React, { Component } from 'react';
import {StyleSheet, Image, Alert} from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Thumbnail, Text, Left, Body, Right, Button, Card, Item, Icon, 
    Input, View, Footer, FooterTab, CardItem, Textarea } from 'native-base';
import ImagePicker from 'react-native-image-picker'
export default class SeeAdd extends Component {
    render() {
        return (
            <Container>
               
                <Content>
                    <View style={{paddingTop:20, paddingBottom:30}}>
                        <Card style={{width:'60%', height:180, alignSelf:'center'}}>
                            <CardItem style={{width:'100%'}}>
                                <Body style={{width:'100%'}}>
                                    <Thumbnail square large 
                                    source={require('../../media/images/electricista.jpg')} 
                                    style={{width:'100%', height:'100%'}}
                                    />
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{textAlignVertical:'center', width:140,
                        fontWeight:'bold', fontSize:23, marginLeft: 20}}>Titulo:</Text>
                        <Input disabled 
                        style={{}}
                        defaultValue="Electricista Industrial"/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{textAlignVertical:'center', marginLeft:20, 
                        fontWeight:'bold', fontSize:23, width:120}}>Categoria:</Text>
                        <Input disabled 
                        style={{marginLeft:20}}
                        defaultValue="Electricista"/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{textAlignVertical:'center', marginLeft:20, 
                        fontWeight:'bold', fontSize:23,width:120}}>Nombre:</Text>
                        <Input disabled 
                        style={{marginLeft:20}}
                        defaultValue="Weyler Maldonado"/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{textAlignVertical:'center', marginLeft:20, 
                        fontWeight:'bold', fontSize:23,width:120}}>Horario:</Text>
                        <Input disabled 
                        style={{marginLeft:20}}
                        defaultValue="8:00AM - 06:00PM"/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{textAlignVertical:'center', marginLeft:20, 
                        fontWeight:'bold', fontSize:23,width:120}}>Costo Aprox:</Text>
                        <Input disabled 
                        style={{marginLeft:20}}
                        defaultValue="$1000.00 MXN"/>
                    </View>
                    <View style={{paddingTop:10}}>
                        <Text style={{textAlignVertical:'center', marginLeft:20, 
                        fontWeight:'bold', fontSize:20,width:150}}>Descripción:</Text>
                        <Textarea disabled style={{marginLeft:10, height:100}}>Lorem ipsum dolor sit amet 
                        consectetur adipiscing, elit ante quam maecenas urna proin, justo risus 
                        morbi blandit nullam. Placerat maecenas nec eu primis quisque class 
                        ullamcorper velit fames aenean nisl sem eros, aliquet et imperdiet 
                        auctor elementum ut lobortis accumsan sociosqu vulputate tristique. 
                        Sodales nullam parturient faucibus natoque arcu lectus tempus est, 
                        augue posuere ridiculus litora vitae sollicitudin venenatis, tempor 
                        conubia habitant mi tincidunt luctus fames.</Textarea>
                    </View>
                    <View style={{alignSelf:'center', paddingTop:10, paddingBottom:15}}>
                        <Button rounded style={{backgroundColor:'green', color:'#fff'}} large onPress={() => Alert.alert('Contratación Exitosa',"Tu solicitud ha sido enviada al Responsable del Servicio, espera confirmación")}>
                            <Text style={{color:'#fff', fontWeight:'normal'}}>Contratar</Text>
                        </Button>
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