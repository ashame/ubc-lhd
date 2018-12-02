import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Slider,
} from 'react-native';
import { Constants } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderValue: 0,
        }
    }
    static navigationOptions = {
        title: "Settings"              
    };

    changeSliderValue(newValue) {
        this.setState(() => {
            return {
                sliderValue: parseInt(newValue),
            }
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { sliderValue } = this.state;
        let data = [{
            value: 'Man',
        }, {
            value: 'Woman',
        }, {
            value: 'More',
        }];
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                
                <Text>Max Distance: {this.state.sliderValue} km</Text>
                <Slider
                    style = {{ width: 300 }}
                    step = {1}
                    minimumValue = {0}
                    maximumValue = {100}
                    onValueChange = {this.changeSliderValue.bind(this)}
                    value = {sliderValue}
                />
                <Text>Age Range: </Text>
                <Slider
                                    
                />
                <Dropdown 
                label='I am a' 
                data={data} 
                />
                <Dropdown
                label='Looking for a'
                data={data}
                />
            </View>
        )
    }

    renderOther() {
        return (
            <Text>
                Other selected!
            </Text>
        )
    }

    renderMore() {
        <Text>
            More selected!
        </Text>
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
    dropdown: {
        width: 300,
    }
})