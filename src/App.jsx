import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopBar from './components/TopBar/index';
import Home from './views/Home/index';
import Test from './views/Test/index';
import Edit from './views/Edit/index';
import 'app.less';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='router'>
          <TopBar />
          <div className='routes'>
            <Route exact path='/' component={Home} />
            <Route exact path='/test' component={Test} />
            <Route exact path='/edit/:articleId' component={Edit} />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;