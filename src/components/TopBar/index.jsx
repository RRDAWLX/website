import React, { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'
import { updateUserInfoIfNeeded } from 'store/actions/user'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import Avatar from 'material-ui/Avatar'

class TopBar extends Component {
  componentWillMount() {
    this.props.dispatch(updateUserInfoIfNeeded())
  }

  render() {
    let { name, avatar, login } = this.props.user

    return (
      <div className='component-top-bar'>
        <Toolbar className='container'>
          <ToolbarGroup firstChild={ true } className='navi'>
            <NavLink to='/' exact className='tab'>Home</NavLink>
            <NavLink to='/test' exact className='tab'>Test</NavLink>
          </ToolbarGroup>

          <ToolbarGroup lastChild={ true }>
            <Link to='/user' className='avatar-container'>
              <Avatar className='avatar' src={ avatar }></Avatar>{ name }
            </Link>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

export default withRouter(connect(state => ({
  user: state.user
}))(TopBar))