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
                onPress={()=>this.props.navigation.navigate('SellerHome')}>
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