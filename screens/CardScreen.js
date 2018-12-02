import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwipeCards from '../components/SwipeCards';

export default class CardScreen extends React.Component { 
    static navigationOptions = {
        title: "Cards",
    }
    render() {
        return( 
            <View style={styles.container}>
                <SwipeCards />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})