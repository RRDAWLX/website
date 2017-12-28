import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from 'routes/index';
import './app.css';
import Home from './views/Home/index';
import Test from './views/Test/index';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/test' component={Test} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;