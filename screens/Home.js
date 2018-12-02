import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Constants } from 'expo';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home"
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Homescreen Test!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
    }
})