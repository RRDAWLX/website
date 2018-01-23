import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './index.less'
import {updateUserInfo} from 'store/actions/user'

export default class TopBar extends Component {
  componentWillMount() {
    this.props.dispatch(updateUserInfo())
  }

  render() {
    let {name, avatar, login} = this.props.user

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
            <img src={avatar} />
            {name}
          </Link>
        </div>
      </div>
    )
  }
}
