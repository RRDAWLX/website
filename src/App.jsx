import React, { Component } from 'react';
import './app.css';
import user from './api/user';
import PublicTest from './components/Test';
import PrivateTest from './views/Test';

class App extends Component {
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
    return (<div>React App
      <p>user: {this.state.user}</p>
      <p>login: {this.state.login ? 'true' : 'false'}</p>
      <PublicTest />
      <PrivateTest />
    </div>);
  }
}

export default App;