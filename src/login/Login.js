import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Card, Button, Text } from 'native-base';
export default class StackedLabelExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <Form>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                        <Button>
                            <Text>Registrarse</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Server')}>
                            <Text>Login</Text>
                        </Button>
                    </Card>
                </Content>
            </Container>
        );
    }
}