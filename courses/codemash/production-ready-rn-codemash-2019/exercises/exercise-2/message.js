import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {
    const { isASecret, name } = this.props;
    const _showSecret = isASecret === true;

    const message = `Here's a ${_showSecret ? 'secret ' : ''}message for you: ${name || 'hello'}!`;

    return (
      <View style={styles.container}>
        <Text>{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5
  },
  message: {
    color: 'green'
  }
});
