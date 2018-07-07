import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import largeImage from 'assets/test/large.png'
import smallImage from 'assets/test/small.png'

export default class Test extends Component {
  render() {
    return (
      <div className='test'>
        <h3>Test</h3>
        <Link to={'/'}>home</Link>
        <div className='large-image'>
          <img src={largeImage} />
          large image
        </div>
        <div className='small-image'>
          <img src={smallImage} />
          small image
        </div>
      </div>
    )
  }
}