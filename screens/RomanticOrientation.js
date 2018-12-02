import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Constants } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';
import { CheckBox } from 'react-native-elements'

export default class RomanticOrientation extends Component {
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
            text: 'Other (Please Specify)',
            orientationId: -1,
        }
    }

    render() {
        const { data } = this.state;
        return (
            <View style={styles.container}>
                    <CheckBox
                    title = '///'
                    checked = {this.state.checked}
                    /> <Text>Heteroromantic</Text>
                    

                    <TextInput
                        placeholder={this.state.text}
                        onChangeText={(text) => this.setState({ text })}
                        //editable={this.state.orientationId === 12}
                        multiline={false}
                        style={{
                            marginTop: 15,
                            height: 30,
                            borderColor: 'rgba(0, 0, 0, 0.4)',
                            borderWidth: 0.3,
                            padding: 1,
                            paddingLeft: 3,
                        }}
                    />

                    <Button title="Back!" onPress={() => navigate("Settings")} style={{paddingTop: 30}} />
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