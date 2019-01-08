import React from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isLoggedIn: false
    };
  }

  render() {
    const { isLoggedIn, username } = this.state;

    const statusMessage = isLoggedIn ? 'You are logged in as user' : 'You are not currently logged in';

    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={() => this.handleSubmit()}
          onChangeText={text => this.setState({ username: text })}
          placeholder="Username"
          value={username}
        />
        <Button
          onPress={() => {
            this.handleSubmit();
          }}
          title="Login"
        />
        <Text style={styles.loginStatus}>{statusMessage}</Text>
      </View>
    );
  }

  handleSubmit = () => {
    const { username } = this.state;

    if (username.length < 4) {
      return;
    }
    this.setState({ isLoggedIn: true });
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  loginStatus: {
    marginTop: 30
  }
});
