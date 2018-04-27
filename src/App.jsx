import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ComponentAsyncLoader from './util/component-async-loader'

import 'app.less'
let TopBar = ComponentAsyncLoader({loader: () => import('./components/TopBar/index')}),
    Home = ComponentAsyncLoader({loader: () => import('./views/Home/index')}),
    Test = ComponentAsyncLoader({loader: () => import('./views/Test/index')}),
    Edit = ComponentAsyncLoader({loader: () => import('./views/Edit/index')})

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