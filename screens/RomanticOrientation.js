import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { Constants } from 'expo';
import RadioForm from 'react-native-simple-radio-button';


var radio_props = [
    { label: 'Heteroromantic', value: 0 },
    { label: 'Homoromantic', value: 1 },
    { label: 'Biromantic', value: 2},
    { label: 'Panromantic', value: 3},
    { label: 'Demiromantic', value: 4},
    { label: 'Other (Please Specify', value: 5},
];

export default class RomanticOrientation extends Component {
    static navigationOptions = {
        title: "Romantic Orientation"
    };

    constructor(props) {
        super(props)
        this.state = {
            text: 'Other (Please Specify)',
            orientationId: -1,
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <RadioForm
                    style={{marginTop: 35}}
                    animation={false}
                    radio_props={radio_props}
                    initial={0}
                    buttonColor="grey"
                    selectedButtonColor="black"
                    onPress={(value) => { 
                        this.setState({ orientationId: value }) 
                    }}
                />

                <TextInput
                    placeholder={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                    editable={this.state.orientationId === 5}
                    multiline={false}
                    style={{
                        marginTop: 15,
                        height: 30,
                        width: 200,
                        borderColor: 'rgba(0, 0, 0, 0.4)',
                        borderWidth: 0.3,
                        padding: 1,
                        paddingLeft: 3,
                    }}
                />

                <Button title="Back!" onPress={() => navigate("Settings")} style={{ paddingTop: 30 }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
    },
})