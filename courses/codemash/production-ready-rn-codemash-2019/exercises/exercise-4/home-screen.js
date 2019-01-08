import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Link, withRouter } from 'react-router-native';

export default class LoginScreen extends React.Component {
  state = {
    isLoggedIn: false,
    username: ''
  };

  handleSubmit() {
    if (this.state.username.length > 3) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are logged in!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
