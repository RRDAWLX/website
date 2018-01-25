import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TopBar from './components/TopBar/index'
import Home from './views/Home/index'
import Test from './views/Test/index'
import Edit from './views/Edit/index'
import 'app.less'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className='router'>
            <TopBar/>
            <div className='routes'>
              <Route exact path='/' component={Home}/>
              <Route exact path='/test' component={Test}/>
              <Route exact path='/edit/:articleId' component={Edit}/>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

function selectState(state) {
  return { user: state.user }
}