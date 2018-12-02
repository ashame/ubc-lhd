import React, { Component } from 'react';
import {
    Button,
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
            data: [{
                value: 'Man',
            }, {
                value: 'Woman',
            }, {
                value: 'Other (Please Specify)',
            }],
        }
        this.changeMaxDistance= this.changeMaxDistance.bind(this);
    }
    static navigationOptions = {
        title: "Settings"              
    };

    changeMaxDistance(newValue) {
        this.setState(() => {
            return {
                sliderValue: parseInt(newValue),
            }
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { sliderValue, data } = this.state;
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                
                <Text>Max Distance: {this.state.sliderValue} km</Text>
                <Slider
                    step = {1}
                    minimumValue = {0}
                    maximumValue = {100}
                    onValueChange = {this.changeMaxDistance}
                />
                <Text>Age Range: </Text>
                <Slider
                    step = {1}
                    minimumValue = {0}
                    maximumValue = {100}                                    
                />
                
                <Dropdown 
                label='I am a' 
                data={data}
                onChangeText={(v, i) => {
                    if (i === 2) {
                        navigate('RomanticOrientation');
                    }
                }}
                />

                <Dropdown
                label='Looking for a'
                data={data}
                animationDuration={0}
                onChangeText={(v, i) => {
                    if (i === 2) {
                        navigate('RomanticOrientation');
                    }
                }}
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