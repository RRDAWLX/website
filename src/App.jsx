import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from 'routes/index';
import './app.css';
import Home from './views/Home/index';
import Test from './views/Test/index';
import Edit from './views/Edit/index';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/test' component={Test} />
          <Route path='/edit/:articleId' component={Edit} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;