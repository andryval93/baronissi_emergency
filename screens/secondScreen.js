import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Screen2'
    }

    render() {
        return <View style={{
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
            <Button
                onPress={() => this.props.navigation.openDrawer()}
                title = "Open Drawer"
            />

        </View>
    }
}