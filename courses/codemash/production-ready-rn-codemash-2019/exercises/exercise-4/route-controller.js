import React from 'react';
import { Route } from 'react-router';
import HelpScreen from './help-screen';
import HomeScreen from './home-screen';
import LoginScreen from './login-screen';

export default class RouteController extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/help" component={HelpScreen} />
        <Route exact path="/home" component={HomeScreen} />
      </React.Fragment>
    );
  }
}
