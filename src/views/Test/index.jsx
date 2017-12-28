import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Test extends Component {
  render() {
    return (
      <div>
        <h3>Test</h3>
        <Link to={'/'}>home</Link>
      </div>
    );
  }
}