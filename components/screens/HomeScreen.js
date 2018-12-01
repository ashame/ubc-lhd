import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Constants } from 'expo';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home"              
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>HomeScreen Test</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }
})