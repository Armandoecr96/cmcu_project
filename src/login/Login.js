import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native'
import logo from '../../media/images/multi-service.png';
import { Container, Header, Content, Form, Item, Input, Label, Card, Button, Text, View } from 'native-base';
export default class StackedLabelExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: "",
            pass: "",
            users :["admin", "user"],
            passwords: ["12345", "123"]
        }
    }

    handleText = (text, state) =>{
        this.setState({
            [state]: text
        })
    }

    login = () =>{
        if(this.state.user === this.state.users[0] && this.state.pass === this.state.passwords[0]){
            this.props.navigation.navigate("Seller");
        }
        if(this.state.user === this.state.users[1] && this.state.pass === this.state.passwords[1]){
            this.props.navigation.navigate("Customer");
        }
        else{

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>

                <View style={styles.inputContainer}>
                    <Input 
                    placeholder="Username"
                    // placeholderTextColor="#FFFFFF"
                    style={styles.Input} 
                    value={this.state.user} 
                    onChangeText={(text) => this.handleText(text, "user")}
                    />
                </View>

                <View style={styles.inputContainer}>
                <Input
                    placeholder="Password"
                    // placeholderTextColor="#FFFFFF"
                    style={styles.Input} 
                    value={this.state.pass} 
                    onChangeText={(text) => this.handleText(text, "pass")}
                    secureTextEntry={true}/>
                </View>
                
                <View style={styles.buttonContainer} >
                    <Button
                    style={styles.loginButton}
                    // onPress={() => this.props.navigation.navigate('Seller')}
                    onPress={this.login}
                    >
                        <Text style={styles.textLoginColor}>Login</Text>
                    </Button>
                </View>
                <View style={styles.buttonContainer} >
                    <Button
                    style={styles.signupButton}
                    // onPress={() => this.props.navigation.navigate('Seller')}
                    >
                        <Text style={styles.textSignColor}>Sign Up</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Input : {
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
    },
    inputContainer:{
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:'80%',
        height:45,
        marginBottom:20,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'  ,
        backgroundColor: '#39466B'
    },
    buttonContainer: {
        height:50,
        width:'80%',
        paddingBottom: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        height:50,
        backgroundColor: "#00CAec",
        width:'100%',
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50,
        marginBottom:20,
    },
    signupButton: {
        height:50,
        backgroundColor: "#39466B",
        width:'50%',
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50,
        marginBottom:20,
    },
    textLoginColor: {
        color: '#000000',
        fontWeight: "bold"
    },
    textSignColor: {
        color: '#FFFFFF',
        fontWeight: "bold"
    },
    logo:{
        width:'100%',
        height:'100%',
        margin: 0,
        padding: 0,
        resizeMode: "contain"
    },
    logoContainer:{
        height: 300,
        width: 300,
        marginTop: -200,
        padding: 0
        // marginTop:-100,
        // marginBottom: -100
    }

    

})