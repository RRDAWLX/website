import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './index.less';

class TopBar extends Component {
  render() {
    return (
      <div className='component-top-bar'>
        <div className='container'>
          <div className='navi'>
            <NavLink
              to='/'
              exact
              className='tab'
              >Home</NavLink>

              <NavLink
                to='/test'
                exact
                className='tab'
                >Test</NavLink>
          </div>

          <Link
            to='/user'
            className='avatar'
            >
            <img src="//upic.vimage1.com/upload/xupload/2017/11/14/74/7007781108_38x38_90.jpg" />
            rrdawlx
          </Link>
        </div>
      </div>
    );
  }
}

export default TopBar;