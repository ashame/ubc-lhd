import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import { Constants } from 'expo';

export default class Profile extends Component {
    static navigationOptions = {
        title: "Profile"              
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Image
                    source={require('../assets/cat.jpg')}
                />
                <Text></Text>
                
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