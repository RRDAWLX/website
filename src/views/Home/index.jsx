import React, { Component } from 'react';
import user from 'api/user';
import './index.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false,
      user: 'unknown user'
    };
  }

  componentDidMount() {
    user.info().then(res => {
      console.log(res);
      if (res.status === 1) {
        let data = res.data;
        this.setState({
          user: data.name,
          login: data.login
        });
      }
    });
  }

  render() {
    return (<div>
      <h3>Home</h3>
      <p>User: { this.state.user }</p>
      <p>Login: { this.state.login ? 'true' : 'false'}</p>
    </div>);
  }

}