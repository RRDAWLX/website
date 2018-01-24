import React, { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'
import { updateUserInfoIfNeeded } from 'store/actions/user'

class TopBar extends Component {
  componentWillMount() {
    this.props.dispatch(updateUserInfoIfNeeded())
  }

  render() {
    let { name, avatar, login } = this.props.user

    return (<div className='component-top-bar'>
      <div className='container'>
        <div className='navi'>
          <NavLink to='/' exact className='tab'>Home</NavLink>

          <NavLink to='/test' exact className='tab'>Test</NavLink>
        </div>

        <Link to='/user' className='avatar'>
          <img src={avatar}/> {name}
        </Link>
      </div>
    </div>)
  }
}

export default withRouter(connect(state => ({
  user: state.user
}))(TopBar))