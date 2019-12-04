import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Thumbnail, Text, Left, Body, Right, Button, Card, Item, Icon, 
    Input, View, Footer, FooterTab } from 'native-base';
import SellerFooterTabs from '../Common/SellerFooterTabs';

export default class myAdds extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                  <View>
                    <Text>Categorias</Text>
                  </View>


                    <List>
                        <ListItem thumbnail>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                <Left>
                                  <Thumbnail square source={require('../../media/images/electricista.jpg')} />
                                </Left>
                                <Body>
                                    <Text>Holitas</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </Card>
                        </ListItem>

                        <ListItem thumbnail>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                <Left>
                                  <Thumbnail square source={require('../../media/images/contratista.jpg')} />
                                </Left>
                                <Body>
                                    <Text>Holitas</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </Card>
                        </ListItem>

                        <ListItem thumbnail>
                            <Card style={{ width: '92%', height: 80, flexDirection: 'row' }}>
                                <Left>
                                    <Thumbnail square source={require('../../media/images/albañil.jpg')} />
                                </Left>
                                <Body>
                                    <Text>Holitas</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </Card>
                        </ListItem>

                    </List>
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