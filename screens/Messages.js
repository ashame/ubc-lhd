import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    Stylesheet,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';

export default class Messages extends Component {
  static navigationOptions = {
      title: "Messages"              
  };
  render() {
      const { navigate } = this.props.navigation;
      return (
          <View style={styles.container}>
              <Text>Messages Test</Text>
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