import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase'
import './Authorization.scss'

class Authorization extends Component{
  constructor(props){
    super(props);
    this.state = {user: ''};
    this.login = this.login.bind(this);
  }

  login(){
    firebase.auth().then(user => {
      this.setState(user);
    });
  }

  render(){
    return <button className = "login" onClick = {this.login}>
      {'sign in'}
    </button>
  }
}

export default Authorization;
