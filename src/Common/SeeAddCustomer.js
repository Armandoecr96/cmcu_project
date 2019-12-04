import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Thumbnail, Text, Left, Body, Right, Button, Card, Item, Icon, 
    Input, View, Footer, FooterTab, CardItem, Textarea } from 'native-base';
import ImagePicker from 'react-native-image-picker'
import CustFooterTabs from './CustFooterTabs'
export default class SeeAddCustomer extends Component {
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
                        <Button rounded success large>
                            <Text style={{color:'#fff', fontWeight:'normal'}}>Contratar</Text>
                        </Button>
                    </View>
                </Content>
                <Footer>
                  <CustFooterTabs navigation={this.props.navigation}/>
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