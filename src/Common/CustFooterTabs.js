import React, {Component} from 'react'
import { FooterTab, Button, Icon, Text } from 'native-base'
import { StyleSheet } from 'react-native'

export default class SellerFooterTabs extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <FooterTab>
                <Button vertical
                onPress={()=>this.props.navigation.navigate('HomeCustomer')}>
                    <Icon active name="ios-home" style={styles.Icon}/>
                    <Text>Inicio</Text>
                </Button>
                <Button vertical
                onPress={()=>this.props.navigation.navigate('FavAnuncios')}>
                    <Icon type="MaterialIcons" name="favorite" style={styles.Icon}/>
                    <Text style={styles.tabMenuMax}>Favoritos</Text>
                </Button>
                <Button vertical
                onPress={()=>this.props.navigation.navigate('RecAnuncios')}>
                    <Icon name="thumbs-up" style={styles.Icon}/>
                    <Text style={{fontSize: 5.7}}>Recomendados</Text>
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
        )
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