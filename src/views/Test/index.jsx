import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default class Test extends Component {
  render() {
    return (
      <div className='test'>
        <h3>Test</h3>
        <Link to={'/'}>home</Link>
      </div>
    );
  }
}