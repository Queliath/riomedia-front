import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import store from "./store/index";
import Root from './components/Root';

ReactDOM.render(
  <Root store={store}/>
  , document.getElementById('root')
);

