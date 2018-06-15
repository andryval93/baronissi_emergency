import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Header, Left, Content } from 'native-base';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'Seganlazioni'
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="menu" size={35} onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 30,
                        color: 'green'
                    }}>
                        Screen2
                    </Text>
                </Content>
            </Container>
        );
    }
}