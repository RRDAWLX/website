import 'babel-polyfill';
// import 'normalize.css';  // 不知道为什么，引用了第三方的css，自定义的css就不被引用了
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

console.log(process.env.NODE_ENV);

let render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
