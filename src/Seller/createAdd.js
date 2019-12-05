import React, { Component } from 'react';
import {StyleSheet, Image, Alert} from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Thumbnail, Text, Left, Body, Right, Button, Card, Item, Icon, 
    Input, View, Footer, FooterTab, CardItem, Form, Label, Picker, Textarea } from 'native-base';
import SellerFooterTabs from '../Common/SellerFooterTabs';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class createAdd extends Component {

    constructor(props){
        super(props)
        this.state={
            filePath: [],
            date: new Date('2020-06-12T14:42:42'),
            isDateTimePickerVisible: false
        }
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
    
      hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
    
      handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
      };

    chooseFile = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);
        
            if (response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
            } else {
            let source = response;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
                filePath: source,
            });
            }
        });
    };

    render() {
        return (
            <Container>
                <Content>
                  <View>
                        <Text style={{fontSize:23, fontWeight:'bold', alignSelf:'center'}}>Crear nuevo anuncio</Text>
                        <Card style={{width:'60%', height:180, alignSelf:'center'}}>
                            <CardItem>
                                <Image source={{uri: this.state.filePath.uri}} 
                                style={{width:'100%', height:110}}
                                />  
                            </CardItem>
                            <Button primary onPress={this.chooseFile.bind(this)}>
                                    <Text>Seleccionar Foto</Text>
                                </Button>          
                        </Card>
                        <Form>
                            <Item stackedLabel style={{marginBottom: 40}}>
                                <Label>Titulo de Anuncio</Label>
                                <Input />
                            </Item>
                            
                            <Label style={{fontSize: 15, marginLeft:15}}>Categoria</Label>
                            <Item picker style={{marginBottom: 40}}>
                                <Picker mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                placeholder="Selecciona tu categoria"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{marginLeft: 10, marginRight:10}}
                                >
                                    <Picker.Item label="Plomeria" value="key0" />
                                    <Picker.Item label="Electricidad" value="key1" />
                                    <Picker.Item label="Albañileria" value="key2" />
                                    <Picker.Item label="Carpinteria" value="key3" />
                                    <Picker.Item label="Herreria" value="key4" />
                                </Picker>
                            </Item>
                            <Item stackedLabel style={{marginBottom: 40}}>
                                <Label>Costo General de Servicios</Label>
                                <Input />
                            </Item>

                            <Item stackedLabel style={{marginBottom: 40}}>
                                <Label>Horario inicio de Labores</Label>
                                <Input />
                                <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                                mode='time' is24Hour={false}
                                />
                                <Button onPress={this.showDateTimePicker}
                                ><Text>Seleccionar Hora</Text></Button>
                            </Item>

                            <Item stackedLabel style={{marginBottom: 40}}>
                                <Label>Horario final de Labores</Label>
                                <Input />
                                <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                                mode='time' is24Hour={false}
                                />
                                <Button onPress={this.showDateTimePicker}
                                ><Text>Seleccionar Hora</Text></Button>
                            </Item>

                            <Label style={{fontSize: 15, marginLeft:15}}>Descripcion</Label>
                            <Item last style={{marginBottom: 30}}>
                                <Textarea rowSpan={5} bordered placeholder="Textarea" style={{width:'95%'}} />
                            </Item>
                        </Form>
                        <Button full success style={{height:50}} onPress={() => Alert.alert('GUARDADO EXITOSO', 'Tu Anuncio ha sido guardado exitosamente, podrás verlo en lista de contratos')}>
                            <Text>Guardar</Text>
                        </Button>
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