import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Slider,
} from 'react-native';
import { Constants } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';


export default class RomanticOrientation extends Component{
    static navigationOptions = {
        title: "Romantic Orientation"              
    };

    constructor(props) {
        super(props)
        this.state = {
            data: [{
                value: 'Androromantic',
            }, {
                value: 'Androgynoromantic',
            }, {
                value: 'Aromantic',
            }, {
                value: 'Biromantic',
            }, {
                value: 'Demiromantic',
            }, {
                value: 'Gynoromantic',
            }, {
                value: 'Grayromantic',
            }, {
                value: 'Heteroromantic',
            }, {
                value: 'Homoromantic',
            }, {
                value: 'Lithroromantic',
            }, {
                value: 'Neutoisromantic',
            }, {
                value: 'Panromantic',
            }, {
                value: 'Confused',
            }],
        }
    }

    render(){
        const { data } = this.state;
        return(
            <View style={styles.container}>
                <Dropdown
                label = 'Romantic Orientation'
                data = {data}
                />
                <Text>Other</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        justifyContent: "center",
        marginTop: Constants.statusBarHeight,
    }, 
})