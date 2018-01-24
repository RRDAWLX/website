import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUserInfoIfNeeded } from 'store/actions/user'
import user from 'api/user'
import './index.css'

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(updateUserInfoIfNeeded())
  }

  render() {
    let { name, login, fetching, validated } = this.props.user

    return (<div>
      <h3>Home</h3>
      <p>User: { name }</p>
      <p>Login: { login ? 'true' : 'false' }</p>
    </div>)
  }
}

export default connect(state => ({
  user: state.user
}))(Home)