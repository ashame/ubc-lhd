import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
//https://www.npmjs.com/package/react-native-swipe-cards

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={StyleSheet.NoMoreCardsText}> No more cards! </Text>
            </View>

        )
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { text: 'Tomato', backgroundColor: '#99ffcc' },
                { text: 'Aubergine', backgroundColor: '#dd99ff' },
                { text: 'Carrot', backgroundColor: '#ff0000' },
                { text: 'Lettuce', backgroundColor: '#9abd19' },

            ]
        };
        this.handleYes = this.handleYes.bind(this);
        this.handleNo = this.handleNo.bind(this);
    }

    handleYes(card) {
        console.log(`Yes for ${card.text}`)
    }

    handleNo(card) {
        console.log(`No for ${card.text}`);
    }

    render() {
        return (
            <SwipeCards
                cards={this.state.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.handleYes}
                handleNope={this.handleNo}
            />
        )
    }
}



const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
    },
    noMoreCardsText: {
        fontSize: 22,
    }
})