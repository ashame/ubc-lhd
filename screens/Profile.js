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
                <Image
                    style={{flex: 1}}
                    source={require('../assets/cat.jpg')}
                    resizeMode="contain"
                />
                <Text></Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }
})