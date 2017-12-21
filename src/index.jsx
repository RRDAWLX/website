import '@babel/polyfill';
import 'whatwg-fetch';
// import 'normalize.css';  // 不知道为什么，引用了第三方的css，自定义的css就不被引用了
import 'react';
import ReactDom from 'react-dom';
import app from './App.jsx';

ReactDom.render(<App />, document.body);