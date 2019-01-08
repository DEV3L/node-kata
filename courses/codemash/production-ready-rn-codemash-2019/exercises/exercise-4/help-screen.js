import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Link, withRouter } from 'react-router-native';

export default class HelpScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Need help?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
