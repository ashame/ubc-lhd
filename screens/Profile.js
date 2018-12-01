import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    Slider, 
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
                <Text>I am a</Text>

                <Text>Seeking a </Text>

                <Slider
                    style = {{ width: 300 }}
                    step = {1}
                    minimumValue = {0}
                    maximumValue = {100}
                />
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